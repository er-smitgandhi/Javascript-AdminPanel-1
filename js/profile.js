function profile(){
      let profile = JSON.parse(localStorage.getItem('checkUserLogin'));
          let info = "";
      
          info = `
                <h6 class="mt-2 user-title">${profile.username}</h6>
                <p class="user-subtitle">${profile.useremail}</p>
          `
          document.getElementById('profileinfo').innerHTML = info;
}
profile();