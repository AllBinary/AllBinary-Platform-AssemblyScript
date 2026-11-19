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
// package org.allbinary.game.combat.damage
// import javax.microedition.lcdui.Graphics
// import org.allbinary.animation.IndexedAnimation
// import org.allbinary.graphics.displayable.CanvasStrings
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.CircularIndexUtil
// import org.allbinary.view.ViewPosition
// import org.allbinary.view.ViewPositionBase

@global export class AnimationDamageFloaters extends DamageFloaters {

    jclassName(): string {
        return "org.allbinary.game.combat.damage.AnimationDamageFloaters";
    }
    logUtil: LogUtil | null = null;
    layerInterface: AllBinaryLayer | null = null;
    animationInterfaceArray: StaticArray<IndexedAnimation | null> | null = null;
    circularIndexUtil: CircularIndexUtil | null = null;
    dx: i32 = 0;
    dy: i32 = 0;

    jfields_AnimationDamageFloaters(): void {
    this.logUtil = LogUtil.getInstance();
    
    
    
    
    
    }
    

    jinit_AnimationDamageFloaters_4(layerInterface: AllBinaryLayer | null, animationInterfaceArray: StaticArray<IndexedAnimation | null> | null, dx: i32, dy: i32): AnimationDamageFloaters {
        super.jinit_DamageFloaters_0();
        this.jfields_AnimationDamageFloaters();
        this.animationInterfaceArray = animationInterfaceArray;
        for (let index: i32 = this.animationInterfaceArray!.length - 1; index >= 0; index--) {
            this.animationInterfaceArray![index]!.setFrame(this.animationInterfaceArray![index]!.getSize() - 1); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        this.layerInterface = layerInterface;
        this.circularIndexUtil = CircularIndexUtil.createInstance(this.animationInterfaceArray!.length); if (JThrowable.pending !== null) return this;
        this.dx = dx;
        this.dy = dy;
        return this;
    }
    

    add(damage: i32): void {
        let i: i32 = this.circularIndexUtil!.getIndex(); if (JThrowable.pending !== null) return;
        this.animationInterfaceArray![i]!.setFrame(0); if (JThrowable.pending !== null) return;
        this.circularIndexUtil!.next(); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        do {
            let viewPosition: ViewPositionBase | null = this.layerInterface!.getViewPosition(); if (JThrowable.pending !== null) break;
            let x: i32 = viewPosition!.getX(); if (JThrowable.pending !== null) break;
            let y: i32 = viewPosition!.getY(); if (JThrowable.pending !== null) break;
            for (let index: i32 = 0; index < this.animationInterfaceArray!.length; index++) {
                let animationInterface: IndexedAnimation | null = this.animationInterfaceArray![index];
                if (animationInterface!.getFrame() < animationInterface!.getAnimationSize() - 1) {
                    let delta: i32 = animationInterface!.getFrame() * 20; if (JThrowable.pending !== null) break;
                    animationInterface!.paintXY(graphics, x + this.dx, y - delta + this.dy); if (JThrowable.pending !== null) break;
                    animationInterface!.nextFrame(); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            let canvasStrings: CanvasStrings | null = CanvasStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, canvasStrings!.PAINT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

