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
// package org.allbinary.game.resource
// import org.allbinary.graphics.PointFactory
// import org.allbinary.graphics.RelativeRelationship
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.relationship.RelativeLayerRelationship
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.util.BasicArrayListUtil

@global export class FeaturedResourceRelativeRelationshipFactory extends FeaturedResourceFactory {

    jclassName(): string {
        return "org.allbinary.game.resource.FeaturedResourceRelativeRelationshipFactory";
    }
    @lazy static jv_INSTANCE: FeaturedResourceRelativeRelationshipFactory | null = null;
    @lazy static js_INSTANCE: bool = false;
    static get INSTANCE(): FeaturedResourceRelativeRelationshipFactory | null {
        if (!FeaturedResourceRelativeRelationshipFactory.js_INSTANCE) {
            FeaturedResourceRelativeRelationshipFactory.js_INSTANCE = true;
            FeaturedResourceRelativeRelationshipFactory.jv_INSTANCE = new FeaturedResourceRelativeRelationshipFactory().jinit_FeaturedResourceRelativeRelationshipFactory_0();
        }
        return FeaturedResourceRelativeRelationshipFactory.jv_INSTANCE;
    }
    static set INSTANCE(value: FeaturedResourceRelativeRelationshipFactory | null) {
        FeaturedResourceRelativeRelationshipFactory.js_INSTANCE = true;
        FeaturedResourceRelativeRelationshipFactory.jv_INSTANCE = value;
    }
    basicArrayListUtil: BasicArrayListUtil | null = null;

    jfields_FeaturedResourceRelativeRelationshipFactory(): void {
    this.basicArrayListUtil = BasicArrayListUtil.getInstance();
    }
    

    jinit_FeaturedResourceRelativeRelationshipFactory_0(): FeaturedResourceRelativeRelationshipFactory {
        super.jinit_FeaturedResourceFactory_0();
        this.jfields_FeaturedResourceRelativeRelationshipFactory();
        return this;
    }
    

    static getInstance(): FeaturedResourceRelativeRelationshipFactory | null {
        return FeaturedResourceRelativeRelationshipFactory.INSTANCE;
    }
    

    getRelativeRelationshipList(resource: string | null, layer: AllBinaryLayer | null): BasicArrayList | null {
        let featureReleaseList: BasicArrayList | null = this.getList(); if (JThrowable.pending !== null) return null;
        let size: i32 = this.getList()!.size(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            let featureInterface: ResourceRelativeRelationshipFactoryInterface | null = changetype<ResourceRelativeRelationshipFactoryInterface | null>(featureReleaseList!.objectArray![index]);
            if (featureInterface!.isFeature()) {
                let list: BasicArrayList | null = featureInterface!.getResourceRelativeRelationshipList(resource); if (JThrowable.pending !== null) return null;
                if (list != this.basicArrayListUtil!.getImmutableInstance()) {
                    return this.duplicate(list, layer);
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        { JThrowable.raise(new JException().jinit_JException_1(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Not available for current feature selection or Resource: ")!.append(resource)))); return null; }
        return null;
    }
    

    duplicate(list: BasicArrayList | null, layer: AllBinaryLayer | null): BasicArrayList | null {
        let pointFactory: PointFactory | null = PointFactory.getInstance(); if (JThrowable.pending !== null) return null;
        let newList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            let relativeRelationship: RelativeRelationship | null = changetype<RelativeRelationship | null>(list!.objectArray![index]);
            newList!.add(new RelativeLayerRelationship().jinit_RelativeLayerRelationship_3(layer, pointFactory!.createXY(relativeRelationship!.getX(), relativeRelationship!.getY()), BasicArrayListUtil.getInstance()!.getImmutableInstance())); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return newList;
    }
}

