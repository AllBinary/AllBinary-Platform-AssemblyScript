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
// package org.allbinary.game.multiplayer.layer
// import org.allbinary.game.identification.Group
// import org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer
// import org.allbinary.graphics.Rectangle
// import org.allbinary.view.ViewPositionBase

@global export class MultiPlayerGameLayer extends CollidableDestroyableDamageableLayer implements MultiPlayerGameLayerInterface {

    jclassName(): string {
        return "org.allbinary.game.multiplayer.layer.MultiPlayerGameLayer";
    }
    

    jinit_MultiPlayerGameLayer_5(remoteInfo: RemoteInfo | null, groupInterface: StaticArray<Group | null> | null, name: string | null, layerInfo: Rectangle | null, viewPosition: ViewPositionBase | null): MultiPlayerGameLayer {
        super.jinit_CollidableDestroyableDamageableLayer_4(groupInterface, name, layerInfo, viewPosition);
        return this;
    }
    

    getMultiplayerBehavior(): MultiplayerBehavior | null {
        return MultiplayerBehavior.NULL_MULTIPLAYER_BEHAVIOR;
    }
    

    setPingInfo(show: bool): void {
    }
    

    setFiring(firing: i16): void {
    }
    

    getFiring(): i16 {
        return 0;
    }
}

