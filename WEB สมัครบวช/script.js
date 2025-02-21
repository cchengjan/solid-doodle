document.getElementById('start-button').addEventListener('click', function() {
    liff.init({ liffId: 'Y2006939118-QV7PnjNA' }) // เปลี่ยนเป็น LIFF ID ของคุณ
      .then(() => {
        if (liff.isLoggedIn()) {
          liff.getProfile().then(profile => {
            const userId = profile.userId;
            const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSf-MypAC-i2LM7zkNNgEuCbyP0Yo0KDitxIf9ZFWMZVt3_84Q/viewform';
            window.location.href = `${googleFormURL}?usp=pp_url&entry.USER_ID=${encodeURIComponent(userId)}`;
          });
        } else {
          liff.login();
        }
      })
      .catch((err) => {
        console.error('LIFF Initialization failed', err);
      });
  });