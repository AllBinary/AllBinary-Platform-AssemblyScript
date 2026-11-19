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
// package org.allbinary.game.collision
// import javax.microedition.lcdui.Graphics
// import org.allbinary.game.layer.CollidableCompositeLayer
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonStrings

@global export class CollidableBaseBehavior extends JObject implements CollidableInterface {

    jclassName(): string {
        return "org.allbinary.game.collision.CollidableBaseBehavior";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    layerCollisionUtil: LayerCollisionUtil | null = null;
    collidable: bool = false;

    jfields_CollidableBaseBehavior(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.layerCollisionUtil = LayerCollisionUtil.getInstance();
    this.collidable = true;
    }
    

    jinit_CollidableBaseBehavior_1(collidable: bool): CollidableBaseBehavior {
        super.jinit_JObject_0();
        this.jfields_CollidableBaseBehavior();
        this.collidable = collidable;
        return this;
    }
    

    update(): void {
    }
    

    getName(): string | null {
        return JObject.jclassOf(this)!.getName();
    }
    

    setCollidable(collidable: bool): void {
        this.collidable = collidable;
    }
    

    isCollidable(ownerLayer: CollidableCompositeLayer | null): bool {
        return this.collidable;
    }
    

    collide(ownerLayer: CollidableCompositeLayer | null, allbinaryCollidableLayer: CollidableCompositeLayer | null): void {
        { JThrowable.raise(new JException().jinit_JException_1(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.commonStrings!.NOT_IMPLEMENTED)!.append(CommonLabels.getInstance()!.COLON_SEP)!.append(JObject.jclassOf(this)!.getName())))); return; }
    }
    

    isCollision(ownerLayer: CollidableCompositeLayer | null, collisionLayer: CollidableCompositeLayer | null): bool {
        return this.layerCollisionUtil!.isCollision(ownerLayer, collisionLayer);
    }
    

    isCollisionInterface(ownerLayer: CollidableCompositeLayer | null, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface | null): bool {
        return this.layerCollisionUtil!.isCollision(ownerLayer, changetype<AllBinaryLayer | null>(collidableInterfaceCompositeInterface));
    }
    

    collideInterface(ownerLayer: CollidableCompositeLayer | null, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface | null): void {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return; }
    }
    

    paint(ownerLayer: CollidableCompositeLayer | null, graphics: Graphics | null): void {
    }
    

    getCollisionTypeWith(layerInterface: AllBinaryLayer | null): CollisionType | null {
        return CollisionTypeFactory.getInstance()!.NONE;
    }
}

