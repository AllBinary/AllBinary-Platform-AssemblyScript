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
// package org.allbinary.game.layer
// import org.allbinary.ai.ArtificialIntelligence
// import org.allbinary.ai.ArtificialIntelligenceInterface
// import org.allbinary.game.collision.CollidableBaseBehavior
// import org.allbinary.game.collision.CollidableBaseBehaviorFactory
// import org.allbinary.game.collision.CollidableInterfaceCompositeInterface
// import org.allbinary.game.collision.CollidableNeverCollideBehaviorFactory
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.RectangleFactory
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonSeps
// import org.allbinary.view.ViewPositionBase
// import org.allbinary.logic.NullUtil

@global export class CollidableCompositeLayer extends AllBinaryGameLayer implements CollidableInterfaceCompositeInterface {

    jclassName(): string {
        return "org.allbinary.game.layer.CollidableCompositeLayer";
    }
    @lazy static jv_NULL_COLLIDABLE_COMPOSITE_LAYER: Object | null = null;
    @lazy static js_NULL_COLLIDABLE_COMPOSITE_LAYER: bool = false;
    static get NULL_COLLIDABLE_COMPOSITE_LAYER(): Object | null {
        if (!CollidableCompositeLayer.js_NULL_COLLIDABLE_COMPOSITE_LAYER) {
            CollidableCompositeLayer.js_NULL_COLLIDABLE_COMPOSITE_LAYER = true;
            CollidableCompositeLayer.jv_NULL_COLLIDABLE_COMPOSITE_LAYER = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return CollidableCompositeLayer.jv_NULL_COLLIDABLE_COMPOSITE_LAYER;
    }
    static set NULL_COLLIDABLE_COMPOSITE_LAYER(value: Object | null) {
        CollidableCompositeLayer.js_NULL_COLLIDABLE_COMPOSITE_LAYER = true;
        CollidableCompositeLayer.jv_NULL_COLLIDABLE_COMPOSITE_LAYER = value;
    }
    collidableInferface: CollidableBaseBehavior | null = null;

    jfields_CollidableCompositeLayer(): void {
    this.collidableInferface = CollidableNeverCollideBehaviorFactory.getInstance()!.createBehavior();
    }
    

    static getNullInstance(): CollidableCompositeLayer | null {
        if (CollidableCompositeLayer.NULL_COLLIDABLE_COMPOSITE_LAYER == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            CollidableCompositeLayer.NULL_COLLIDABLE_COMPOSITE_LAYER = new CollidableCompositeLayer().jinit_CollidableCompositeLayer_4(StringUtil.getInstance()!.EMPTY_STRING, RectangleFactory.SINGLETON, ViewPositionBase.NULL_VIEW_POSITION, CollidableNeverCollideBehaviorFactory.getInstance()); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<CollidableCompositeLayer | null>(CollidableCompositeLayer.NULL_COLLIDABLE_COMPOSITE_LAYER);
    }
    

    jinit_CollidableCompositeLayer_4(name: string | null, layerInfo: Rectangle | null, viewPosition: ViewPositionBase | null, collidableBaseBehaviorFactory: CollidableBaseBehaviorFactory | null): CollidableCompositeLayer {
        super.jinit_AllBinaryGameLayer_3(name, layerInfo, viewPosition);
        this.jfields_CollidableCompositeLayer();
        if (collidableBaseBehaviorFactory != CollidableNeverCollideBehaviorFactory.getInstance()) {
            this.setCollidableInferface(collidableBaseBehaviorFactory!.createBehavior()); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getArtificialIntelligenceInterface(): ArtificialIntelligenceInterface | null {
        ForcedLogUtil.log(this.commonStrings!.NOT_IMPLEMENTED, this); if (JThrowable.pending !== null) return null;
        return ArtificialIntelligence.getInstance();
    }
    

    getCollidableInferface(): CollidableBaseBehavior | null {
        return this.collidableInferface;
    }
    

    setCollidableInferface(collidableInferface: CollidableBaseBehavior | null): void {
        this.collidableInferface = collidableInferface;
    }
    

    implmentsCollidableInterface(): bool {
        return true;
    }
    

    toStringAppend(stringBuffer: StringMaker | null): void {
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return;
        super.toStringAppend(stringBuffer); if (JThrowable.pending !== null) return;
        stringBuffer!.append(commonSeps!.NEW_LINE); if (JThrowable.pending !== null) return;
        stringBuffer!.append(JObject.jtoString(this.getCollidableInferface())); if (JThrowable.pending !== null) return;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        this.toStringAppend(stringBuffer); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

