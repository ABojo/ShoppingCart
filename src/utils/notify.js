async function notify(messageText) {
  const message = document.createElement('h1');
  message.className = 'message';
  message.textContent = messageText;
  document.body.append(message);
  await new Promise((resolve) => setTimeout(resolve, 4000));
  message.remove();
}

export default notify;
