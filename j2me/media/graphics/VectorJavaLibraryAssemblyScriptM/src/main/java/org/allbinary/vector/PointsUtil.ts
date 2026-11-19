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
// package org.allbinary.vector

@global export class PointsUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.vector.PointsUtil";
    }
    @lazy static jv_instance: PointsUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PointsUtil | null {
        if (!PointsUtil.js_instance) {
            PointsUtil.js_instance = true;
            PointsUtil.jv_instance = new PointsUtil().jinit_PointsUtil_0();
        }
        return PointsUtil.jv_instance;
    }
    static set instance(value: PointsUtil | null) {
        PointsUtil.js_instance = true;
        PointsUtil.jv_instance = value;
    }

    jinit_PointsUtil_0(): PointsUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): PointsUtil | null {
        return PointsUtil.instance;
    }
    

    adjustXY(points: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null, x: i32, y: i32): StaticArray<StaticArray<StaticArray<i32> | null> | null> | null {
        let size: i32 = points!.length;
        let newPoints: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null = JArrays.new3<i32>(size, 0, 0);
        for (let index: i32 = 0; index < size; index++) {
            let size2: i32 = points![index]!.length;
            newPoints![index] = JArrays.new2<i32>(size2, 2);
            for (let index2: i32 = 0; index2 < size2; index2++) {
                if (points![index]![index2]![0] != 1000) {
                    newPoints![index]![index2]![0] = points![index]![index2]![0] + x;
                    newPoints![index]![index2]![1] = points![index]![index2]![1] + y;
                } else {
                    newPoints![index]![index2]![0] = 1000;
                    newPoints![index]![index2]![1] = 1000;
                }
            }
        }
        return newPoints;
    }
    

    adjust_2(points: StaticArray<StaticArray<i32> | null> | null, both: i32): StaticArray<StaticArray<i32> | null> | null {
        return this.adjust_3(points, both, both);
    }
    

    adjust_3(points: StaticArray<StaticArray<i32> | null> | null, x: i32, y: i32): StaticArray<StaticArray<i32> | null> | null {
        let newPoints: StaticArray<StaticArray<i32> | null> | null = JArrays.new2<i32>(points!.length, 2);
        for (let index2: i32 = 0; index2 < points!.length; index2++) {
            if (points![index2]![0] != 1000) {
                newPoints![index2]![0] = points![index2]![0] + x;
                newPoints![index2]![1] = points![index2]![1] + y;
            } else {
                newPoints![index2]![0] = 1000;
                newPoints![index2]![1] = 1000;
            }
        }
        return newPoints;
    }
}

