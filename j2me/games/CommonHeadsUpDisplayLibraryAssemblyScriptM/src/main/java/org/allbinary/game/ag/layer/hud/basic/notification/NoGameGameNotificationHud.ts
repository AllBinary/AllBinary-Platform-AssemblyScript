/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2011 AllBinary
 *
 * By agreeing to this license you and any business entity you represent are
 * legally bound to the AllBinary Open License Version 1 legal agreement.
 *
 * You may obtain the AllBinary Open License Version 1 legal agreement from
 * AllBinary or the root directory of AllBinary's AllBinary Platform repository.
 *
 * Created By: Travis Berthelot
 *  
 */
// Generated Code Do Not Modify
// package org.allbinary.game.ag.layer.hud.basic.notification
// import org.allbinary.game.graphics.hud.BasicHudFactory
// import org.allbinary.graphics.color.BasicColorFactory

@global export class NoGameGameNotificationHud extends GameNotificationHud {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.hud.basic.notification.NoGameGameNotificationHud";
    }
    

    jinit_NoGameGameNotificationHud_0(): NoGameGameNotificationHud {
        super.jinit_GameNotificationHud_4(BasicHudFactory.getInstance()!.TOPCENTER, BasicHudFactory.getInstance()!.HORIZONTAL, 2, BasicColorFactory.getInstance()!.RED);
        this.updateMaxWidth = 40;
        this.updateMaxHeight = 14;
        return this;
    }
}

