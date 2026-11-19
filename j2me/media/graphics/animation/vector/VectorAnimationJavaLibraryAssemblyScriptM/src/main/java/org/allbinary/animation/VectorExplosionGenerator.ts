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
// package org.allbinary.animation
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.PointFactory
// import org.allbinary.graphics.pipeline.RandomRotationFactory
// import org.allbinary.graphics.pipeline.RandomTranslation
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.util.BasicArrayListS

@global export class VectorExplosionGenerator extends JObject {

    jclassName(): string {
        return "org.allbinary.animation.VectorExplosionGenerator";
    }
    @lazy static jv_instance: VectorExplosionGenerator | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): VectorExplosionGenerator | null {
        if (!VectorExplosionGenerator.js_instance) {
            VectorExplosionGenerator.js_instance = true;
            VectorExplosionGenerator.jv_instance = new VectorExplosionGenerator().jinit_VectorExplosionGenerator_0();
        }
        return VectorExplosionGenerator.jv_instance;
    }
    static set instance(value: VectorExplosionGenerator | null) {
        VectorExplosionGenerator.js_instance = true;
        VectorExplosionGenerator.jv_instance = value;
    }
    RANDOM: VectorExplosionType | null = null;
    ROTATION: VectorExplosionType | null = null;
    vectorAnimationUtil: VectorAnimationUtil | null = null;
    randomRotationFactory: RandomRotationFactory | null = null;

    jfields_VectorExplosionGenerator(): void {
    this.RANDOM = new VectorExplosionType().jinit_VectorExplosionType_0();
    this.ROTATION = new VectorExplosionType().jinit_VectorExplosionType_0();
    this.vectorAnimationUtil = VectorAnimationUtil.getInstance();
    this.randomRotationFactory = RandomRotationFactory.getInstance();
    }
    

    static getInstance(): VectorExplosionGenerator | null {
        return VectorExplosionGenerator.instance;
    }
    

    jinit_VectorExplosionGenerator_0(): VectorExplosionGenerator {
        super.jinit_JObject_0();
        this.jfields_VectorExplosionGenerator();
        return this;
    }
    

    createList(list: BasicArrayList | null, howMuch: i32, type: VectorExplosionType | null): BasicArrayList | null {
        let point: GPoint | null = null;
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return null;
        let points: StaticArray<StaticArray<i32> | null> | null = JArrays.new2<i32>(size, 2);
        for (let index: i32 = 0; index < size; index++) {
            point = changetype<GPoint | null>(list!.objectArray![index]);
            points![index]![0] = point!.getX(); if (JThrowable.pending !== null) return null;
            points![index]![1] = point!.getY(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return this.createListFromPoints(list, points, howMuch, type);
    }
    

    getInstance3(points: StaticArray<StaticArray<i32> | null> | null, howMuch: i32, type: VectorExplosionType | null): StaticArray<StaticArray<StaticArray<i32> | null> | null> | null {
        let pointsBasicArrayList: BasicArrayList | null = this.getInstanceStartFrame(points, howMuch, type, true); if (JThrowable.pending !== null) return null;
        let tempBasicArrayList: BasicArrayList | null = changetype<BasicArrayList | null>(pointsBasicArrayList!.objectArray![0]);
        let newPoints: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null = this.vectorAnimationUtil!.toAnimationArrayFromListOfPointListWithPointsPerFrame(pointsBasicArrayList, tempBasicArrayList!.size()); if (JThrowable.pending !== null) return null;
        return newPoints;
    }
    

    getInstanceStartFrame(points: StaticArray<StaticArray<i32> | null> | null, howMuch: i32, type: VectorExplosionType | null, startFrame: bool): BasicArrayList | null {
        do {
            let pointsBasicArrayList: BasicArrayList | null = new BasicArrayListS().jinit_BasicArrayListS_1(howMuch); if (JThrowable.pending !== null) break;
            pointsBasicArrayList!.add(this.createPointsBasicArrayList(points)); if (JThrowable.pending !== null) break;
            let frameIndex: i32 = 0;
            let tempBasicArrayList: BasicArrayList | null = null;
            let pointBasicArrayList: BasicArrayList | null = null;
            while (frameIndex < howMuch) {
                tempBasicArrayList = changetype<BasicArrayList | null>(pointsBasicArrayList!.objectArray![frameIndex]);
                pointBasicArrayList = this.createListFromPoints(tempBasicArrayList, points, howMuch, type); if (JThrowable.pending !== null) break;
                pointsBasicArrayList!.add(pointBasicArrayList); if (JThrowable.pending !== null) break;
                frameIndex++;
            } if (JThrowable.pending !== null) break;
            if (!startFrame) {
                pointsBasicArrayList!.removeAt(0); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            return pointsBasicArrayList;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    createListFromPoints(tempBasicArrayList: BasicArrayList | null, points: StaticArray<StaticArray<i32> | null> | null, howMuch: i32, type: VectorExplosionType | null): BasicArrayList | null {
        let index: i32 = 0;
        let pointBasicArrayList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        let sectionBasicArrayList: BasicArrayList | null = null;
        while (index < points!.length) {
            sectionBasicArrayList = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
            while (points![index]![0] != 1000) {
                sectionBasicArrayList!.add(tempBasicArrayList!.objectArray![index]); if (JThrowable.pending !== null) return null;
                index++;
                if (index >= points!.length) {
                    break;
                }
            } if (JThrowable.pending !== null) return null;
            sectionBasicArrayList = RandomTranslation.getInstance2(sectionBasicArrayList, howMuch); if (JThrowable.pending !== null) return null;
            if (type == this.ROTATION) {
                sectionBasicArrayList = this.randomRotationFactory!.getInstanceList(sectionBasicArrayList, howMuch); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            let size: i32 = sectionBasicArrayList!.size(); if (JThrowable.pending !== null) return null;
            for (let index2: i32 = 0; index2 < size; index2++) {
                pointBasicArrayList!.add(sectionBasicArrayList!.objectArray![index2]); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            if (index >= points!.length) {
                break;
            } else if (points![index]![0] == 1000) {
                pointBasicArrayList!.add(tempBasicArrayList!.objectArray![index]); if (JThrowable.pending !== null) return null;
                index++;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return pointBasicArrayList;
    }
    

    createPointsBasicArrayList(points: StaticArray<StaticArray<i32> | null> | null): BasicArrayList | null {
        if (points!.length == 0) {
            { JThrowable.raise(new JException().jinit_JException_1("Not Points Provided")); return null; }
        } if (JThrowable.pending !== null) return null;
        let firstPointBasicArrayList: BasicArrayList | null = new BasicArrayListS().jinit_BasicArrayListS_1(points!.length); if (JThrowable.pending !== null) return null;
        let pointFactory: PointFactory | null = PointFactory.getInstance(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < points!.length; index++) {
            firstPointBasicArrayList!.add(pointFactory!.createXY(points![index]![0], points![index]![1])); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return firstPointBasicArrayList;
    }
}

