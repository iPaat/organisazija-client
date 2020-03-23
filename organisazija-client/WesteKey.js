
mp.keys.bind(0xBC, false, () => {

    if(!mp.gui.chat.enabled) {
        mp.events.callRemote("Weste");

		mp.game.streaming.requestAnimDict("amb@code_human_cower@male@idle_a");//preload the animation
        mp.players.local.taskPlayAnim("amb@code_human_cower@male@idle_a", "idle_b", 8.0, 1.0, 4000, 1, 1.0, false, false, false);
    		setTimeout(
       	 		() => {
           	 	mp.players.local.freezePosition(false);
       	    	},
       	 	4 * 1000
    		);
    }
	mp.game.graphics.notify('Du hast dir eine Weste angezogen!');
});



mp.gui.execute("const _enableChatInput = enableChatInput;enableChatInput = (enable) => { mp.trigger('chatEnabled', enable); _enableChatInput(enable) };");

mp.events.add('chatEnabled', (isEnabled) => {
    mp.gui.chat.enabled = isEnabled;
});

mp.keys.bind(0xBE, false, () => {

    if(!mp.gui.chat.enabled) {
        mp.events.callRemote("Verbandskasten");
		mp.game.streaming.requestAnimDict("amb@code_human_cower@male@idle_a");//preload the animation
        mp.players.local.taskPlayAnim("amb@code_human_cower@male@idle_a", "idle_b", 8.0, 1.0, 4000, 1, 1.0, false, false, false);
    		setTimeout(
       	 		() => {
           	 	mp.players.local.freezePosition(false);
       	    	},
       	 	4 * 1000
    		);
    }
	mp.game.graphics.notify('Du hast dich mit einem Verbandskasten geheilt!');
});
