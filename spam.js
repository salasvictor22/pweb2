function detectarSpam() {
  // Obtener la bandeja de entrada
  var threads = GmailApp.getInboxThreads();

  // Iterar a través de cada hilo de correo
  for (var i = 0; i < threads.length; i++) {
    var thread = threads[i];
    var messages = thread.getMessages();

    // Iterar a través de cada mensaje en el hilo
    for (var j = 0; j < messages.length; j++) {
      var message = messages[j];

      // Obtener el contenido del mensaje y otras propiedades relevantes
      var subject = message.getSubject();
      var sender = message.getFrom();
      var body = message.getPlainBody();

      if (esCorreoSpam(subject, sender, body)) {
        message.moveToTrash(); // Mover a la papelera
        Logger.log('Se ha detectado y movido a la papelera el mensaje ' + message.getSubject());
      }
    }
  }
}

function esCorreoSpam(subject, sender, body) {
  
  if (sender.toLowerCase().includes('ramiro arturo rodriguez saravia') ) {
    return true;
  }
  return false;
}