﻿
model.GlassSettings.events.onInit = function()
{
	var myCurrentUser = currentUser(), // we get the user of the current session.
		myUser = ds.Person.find("ID = :1", myCurrentUser.ID);

	if ((myCurrentUser !== null) && (myUser !== null)) {//if a user is logged in.		
		this.owner = myUser;
	}
	
}

model.GlassSettings.events.onRestrictingQuery = function()
{
	var sessionRef = currentSession();
	var result = ds.GlassSettings.createEntityCollection(); 
	var currentUser = ds.Person.getCurrentPerson();
	if (sessionRef.belongsTo("Administrator")) {
		result = ds.GlassSettings.all();
	} else {
		if (currentUser) {
			result = ds.GlassSettings.query("owner.ID = :1", currentUser.ID);
		}
	}
	return result;
	//return ds.GlassSettings.query("isClosed =:1", true);
	
};



