// Config object, with images Urls and app's strings translated in different languages
var config = {
  'icons': {
    'notConfiguredUrl': 'https://raw.githubusercontent.com/manglaneso/G-Birthdays-Reminders/master/imgs/sync_problem.png',
    'configuredUrl': 'https://raw.githubusercontent.com/manglaneso/G-Birthdays-Reminders/master/imgs/done.png',
  },
  'textLocales': {
    'es': {
      'configured': {
        'infoValueTopLabel': '¡Éxito!',
        'infoValueContent': 'Pulsa el botón si quieres dejar de recibir las notificaciones de cumpleaños',
        'actionButtonText': 'Detener notificaciones',
      },
      'notConfigured': {
        'infoValueTopLabel': '¡Configura tus notificaciones!',
        'infoValueContent': 'Pulsa el botón si quieres empezar a recibirlas',
        'actionButtonText': 'Activar notificaciones',
      } 
    },
    'en': {
      'configured': {
        'infoValueTopLabel': 'Success!',
        'infoValueContent': 'Click the button on the bottom to disable the birthday notifications',
        'actionButtonText': 'Stop notifications',
      },
      'notConfigured': {
        'infoValueTopLabel': 'Configure your notifications!',
        'infoValueContent': 'Click the button on the bottom to start receiving birthday notifications',
        'actionButtonText': 'Start notifications',
      }
    }
  },
  'emailLocales': {
    'es': {
      'subject': '¡Cumpleaños de hoy!',
      'paragraph': 'Hoy tienes que felicitar los siguientes cumpleaños:'
    },
    'en': {
      'subject': 'Today\'s Birthdays!',
      'paragraph': 'Your birthdays for today:'
    }
  }
};
