﻿var Mirror = require('MirrorAPI').Mirror;currentSession().promoteWith('Administrator');var pers = ds.Person({email:'troxell@gmail.com'});var mir = new Mirror(pers.GoogleAccess);var outid=[];var currentItems = mir.listItems();console.log('stepping through');for(var i=0;i<currentItems.items.length;i++){	var ite = currentItems.items[i];	if(ite.bundleId){		outid[ite.id] = ite;		//mir.deleteItem(ite.id);		console.log(ite);	}else{		//console.log('deleting')		console.log(ite);		console.log(ite.text)		//mir.deleteItem(ite.id);	}	console.log(ite.notification)};//mir.deleteItem("66c7656f-4df2-4082-a619-d2e87fa7c106");//currentItems.items;