//QUIET TIMES

async function activityTable(day) {
    let logFileList = await textFile("camera_logs.txt");
    let logFiles = logFileList.split("\n");
    
    let activityArray = Array(24).fill(0);
    
    for (let logFile of logFiles) {
        let logContent = await textFile(logFile);
        let timestamps = logContent.split("\n");
        
        for (let timestamp of timestamps) {
            if (timestamp) {
                let date = new Date(parseInt(timestamp));
                if (date.getDay() === day) {
                    activityArray[date.getHours()]++;
                }
            }
        }
    }
    
    return activityArray;
}
activityTable(1).then(table => console.log(activityGraph(table)));


//Real promises

const fs = require('fs').promises;

function activityTable(day) {
  const logFiles = ['log1.txt', 'log2.txt', 'log3.txt'];
  const fileReadPromises = logFiles.map(file => {
    return fs.readFile(file, 'utf8') 
      .then(content => parseActivity(content, day)) 
      .catch(error => {
        console.error(`Error reading ${file}: ${error.message}`);
        throw error; 
      });
  });
  return Promise.all(fileReadPromises)
    .then(results => {
      return results.reduce((acc, current) => acc.concat(current), []);
    })
    .catch(error => {
      console.error(`Error processing activity table: ${error.message}`);
      throw error;
    });
}
function parseActivity(content, day) {
  const activities = JSON.parse(content); 
  return activities.filter(activity => activity.day === day);
}

activityTable(6)
  .then(table => console.log(activityGraph(table)))
function activityGraph(table) {
  return `Graph for ${table.length} activities`;
}


//Buliding Promise.all

function Promise_all(promises) {
    return new Promise((resolve, reject) => {
      if (promises.length === 0) {
        return resolve([]);
      }
  
      let results = [];
      let completedPromises = 0;
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then(value => {
            results[index] = value;
            completedPromises++;
  
            if (completedPromises === promises.length) {
              resolve(results);
            }
          })
          .catch(reject);
      });
    });
  }
  
  Promise_all([]).then(array => {
    console.log("This should be []:", array);
  });
  
  function soon(val) {
    return new Promise(resolve => {
      setTimeout(() => resolve(val), Math.random() * 500);
    });
  }
  
  Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
  });
  
  Promise_all([soon(1), Promise.reject("X"), soon(3)])
    .then(array => {
      console.log("We should not get here");
    })
    .catch(error => {
      if (error != "X") {
        console.log("Unexpected failure:", error);
      } else {
        console.log("This should fail with 'X':", error);
      }
    });
  