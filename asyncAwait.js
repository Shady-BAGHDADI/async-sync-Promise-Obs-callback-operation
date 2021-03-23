//async await => te5dem de tel sort l code look like syncrone 
//await tji 9odem kol function promise w trod result fi objet
//await async mafihech then w catch ama fiha try catch


console.log('Before');

// Callback-based approach
//
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     })
//   })
// });

// Promise-based approach
// getUser(1)
//   .then(user => getRepositories(user.gitHubUsername))
//   .then(repos => getCommits(repos[0]))
//   .then(commits => console.log('Commits', commits))
//   .catch(err => console.log('Error', err.message));


// console.log('After');



//async await ..async mahi illa decoration 

async function displayCommits (){
    try{
    const user = await getUser(1)
    const repos = await getRepositories(user.gitHubUsername)
    const commits = await getCommits(repos[0])
    
    console.log("commits : ",commits);
    }
    catch(err) {
        console.log("ERROR :",err.message);
    }
}
displayCommits()




function getUser(id) {
  return new Promise((resolve, reject) => {
    // Kick off some async work 
    setTimeout(() => {
      console.log('Reading a user from a database...');
      resolve({ id: id, gitHubUsername: 'mosh' });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);  
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['commit']);
    }, 2000);
  });
}