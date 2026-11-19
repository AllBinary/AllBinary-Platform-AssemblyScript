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
// import org.allbinary.game.rand.MyRandomFactory
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorArrayIndexer
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.color.BasicColorSetUtil
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.logic.java.character.CharArrayFactory
// import org.allbinary.logic.math.PrimitiveLongUtil
// import org.allbinary.util.CircularIndexUtil
// import org.allbinary.view.ViewPosition
// import org.allbinary.view.ViewPositionBase

@global export class PtsDamageFloaters extends DamageFloaters {

    jclassName(): string {
        return "org.allbinary.game.combat.damage.PtsDamageFloaters";
    }
    @lazy static jv_basicColorArrayIndexer: BasicColorArrayIndexer | null = null;
    @lazy static js_basicColorArrayIndexer: bool = false;
    static get basicColorArrayIndexer(): BasicColorArrayIndexer | null {
        if (!PtsDamageFloaters.js_basicColorArrayIndexer) {
            PtsDamageFloaters.js_basicColorArrayIndexer = true;
            PtsDamageFloaters.jv_basicColorArrayIndexer = new BasicColorArrayIndexer().jinit_BasicColorArrayIndexer_1(StaticArray.fromArray<BasicColor | null>([BasicColorFactory.getInstance()!.WHITE, BasicColorFactory.getInstance()!.RED, BasicColorFactory.getInstance()!.YELLOW, BasicColorFactory.getInstance()!.BLUE]));
        }
        return PtsDamageFloaters.jv_basicColorArrayIndexer;
    }
    static set basicColorArrayIndexer(value: BasicColorArrayIndexer | null) {
        PtsDamageFloaters.js_basicColorArrayIndexer = true;
        PtsDamageFloaters.jv_basicColorArrayIndexer = value;
    }
    basicSetColorUtil: BasicColorSetUtil | null = null;
    layerInterface: AllBinaryLayer | null = null;
    lastDamage: StaticArray<i32> | null = null;
    lastDamageString: StaticArray<StaticArray<u16> | null> | null = null;
    lastDamageStringSizeArray: StaticArray<i32> | null = null;
    circularIndexUtil: CircularIndexUtil | null = null;
    primitiveLongUtil: PrimitiveLongUtil | null = null;
    myRandomFactory: MyRandomFactory | null = null;

    jfields_PtsDamageFloaters(): void {
    this.basicSetColorUtil = BasicColorSetUtil.getInstance();
    
    this.lastDamage = new StaticArray<i32>(5);
    this.lastDamageString = JArrays.new2<u16>(5, 0);
    this.lastDamageStringSizeArray = new StaticArray<i32>(5);
    this.circularIndexUtil = CircularIndexUtil.createInstance(5);
    
    this.myRandomFactory = MyRandomFactory.getInstance();
    }
    

    jinit_PtsDamageFloaters_1(layerInterface: AllBinaryLayer | null): PtsDamageFloaters {
        super.jinit_DamageFloaters_0();
        this.jfields_PtsDamageFloaters();
        this.primitiveLongUtil = PrimitiveLongUtil.createPowerOfTen(100000); if (JThrowable.pending !== null) return this;
        this.layerInterface = layerInterface;
        let CHAR_ARRAY: StaticArray<u16> | null = CharArrayFactory.getInstance()!.getZeroCharArray(); if (JThrowable.pending !== null) return this;
        for (let index: i32 = this.lastDamageString!.length - 1; index >= 0; index--) {
            this.lastDamageString![index] = CHAR_ARRAY;
        }
        return this;
    }
    

    add(damage: i32): void {
        let index: i32 = this.circularIndexUtil!.getIndex(); if (JThrowable.pending !== null) return;
        this.lastDamage![index] = damage;
        this.lastDamageString![index] = this.primitiveLongUtil!.getCharArray(this.lastDamage![index]); if (JThrowable.pending !== null) return;
        this.lastDamageStringSizeArray![index] = this.primitiveLongUtil!.getCurrentTotalDigits(); if (JThrowable.pending !== null) return;
        this.circularIndexUtil!.next(); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        let viewPosition: ViewPositionBase | null = this.layerInterface!.getViewPosition(); if (JThrowable.pending !== null) return;
        let x: i32 = viewPosition!.getX(); if (JThrowable.pending !== null) return;
        let y: i32 = viewPosition!.getY(); if (JThrowable.pending !== null) return;
        for (let index: i32 = this.lastDamage!.length - 1; index >= 0; index--) {
            if (this.lastDamage![index] != 0) {
                let delta: i32 = 10 * (index + 2);
                this.basicSetColorUtil!.setBasicColorP(graphics, PtsDamageFloaters.basicColorArrayIndexer!.get()); if (JThrowable.pending !== null) return;
                graphics!.drawChars(this.lastDamageString![index], 0, this.lastDamageStringSizeArray![index], x - this.myRandomFactory!.getNextInt(delta), y - delta, 0); if (JThrowable.pending !== null) return;
                PtsDamageFloaters.basicColorArrayIndexer!.next(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            this.lastDamage![index] = 0;
        } if (JThrowable.pending !== null) return;
    }
}

