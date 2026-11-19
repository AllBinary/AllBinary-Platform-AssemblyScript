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
// package org.allbinary.game.layer.pickup
// import javax.microedition.lcdui.Graphics
// import org.allbinary.animation.Animation
// import org.allbinary.animation.NullAnimationFactory
// import org.allbinary.graphics.PointFactory
// import org.allbinary.graphics.Rectangle
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.view.ViewPosition

@global export class IconLayer extends AllBinaryLayer {

    jclassName(): string {
        return "org.allbinary.game.layer.pickup.IconLayer";
    }
    @lazy static jv_NULL_ICON_LAYER: IconLayer | null = null;
    @lazy static js_NULL_ICON_LAYER: bool = false;
    static get NULL_ICON_LAYER(): IconLayer | null {
        if (!IconLayer.js_NULL_ICON_LAYER) {
            IconLayer.js_NULL_ICON_LAYER = true;
            IconLayer.jv_NULL_ICON_LAYER = new IconLayer().jinit_IconLayer_3(NullAnimationFactory.getFactoryInstance()!.getInstance1(0), 0, 0);
        }
        return IconLayer.jv_NULL_ICON_LAYER;
    }
    static set NULL_ICON_LAYER(value: IconLayer | null) {
        IconLayer.js_NULL_ICON_LAYER = true;
        IconLayer.jv_NULL_ICON_LAYER = value;
    }
    animationInterface: Animation | null = null;

    jfields_IconLayer(): void {
    
    }
    

    jinit_IconLayer_3(animationInterface: Animation | null, width: i32, height: i32): IconLayer {
        super.jinit_AllBinaryLayer_3(StringUtil.getInstance()!.EMPTY_STRING, new Rectangle().jinit_Rectangle_3(PointFactory.getInstance()!.ZERO_ZERO, width, height), ViewPosition.getInstanceD());
        this.jfields_IconLayer();
        this.animationInterface = animationInterface;
        return this;
    }
    

    paint(graphics: Graphics | null): void {
        this.animationInterface!.paintXY(graphics, this.x, this.y); if (JThrowable.pending !== null) return;
    }
    

    paintThreed(graphics: Graphics | null): void {
        this.animationInterface!.paintThreedXYZ(graphics, this.x, this.y, this.z); if (JThrowable.pending !== null) return;
    }
    

    getAnimationInterface(): Animation | null {
        return this.animationInterface;
    }
}

