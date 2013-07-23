﻿
model.GlassNotification.methods.notifyAllWithMessage = function(theMessage)
{
	var message = theMessage;
	var	people, notificaion;
	
	if (message) {
		currentSession().promoteWith('Administrator');
		people = ds.Person.query("GlassSettings.name='NewUserNotifications' and GlassSettings.setting='yes'");
		currentSession().unPromote();
		
		people.forEach(function(person){
			notification = new ds.GlassNotification(
			{
				owner: person.ID,
				message: message
			});
			notification.save();
		})
	}
	return 'yep';
}

//model.GlassNotification.methods.notifyWithMessage.scope ="public";
