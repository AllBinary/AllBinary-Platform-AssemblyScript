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
// package org.allbinary.logic.math.permutations
// import java.util.Arrays
// import org.allbinary.TsUtil
// import org.allbinary.logic.util.visitor.Visitor

@global export class OrderedObjectArrayPermutationUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.math.permutations.OrderedObjectArrayPermutationUtil";
    }
    @lazy static jv_instance: OrderedObjectArrayPermutationUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): OrderedObjectArrayPermutationUtil | null {
        if (!OrderedObjectArrayPermutationUtil.js_instance) {
            OrderedObjectArrayPermutationUtil.js_instance = true;
            OrderedObjectArrayPermutationUtil.jv_instance = new OrderedObjectArrayPermutationUtil().jinit_OrderedObjectArrayPermutationUtil_0();
        }
        return OrderedObjectArrayPermutationUtil.jv_instance;
    }
    static set instance(value: OrderedObjectArrayPermutationUtil | null) {
        OrderedObjectArrayPermutationUtil.js_instance = true;
        OrderedObjectArrayPermutationUtil.jv_instance = value;
    }
    TOTAL_ITERATIONS_TABLE: string | null = null;
    FINISHED: string | null = null;

    jfields_OrderedObjectArrayPermutationUtil(): void {
    this.TOTAL_ITERATIONS_TABLE = "Total Iterations: ";
    this.FINISHED = "\nFINISHED";
    }
    

    static getInstance(): OrderedObjectArrayPermutationUtil | null {
        return OrderedObjectArrayPermutationUtil.instance;
    }
    

    jinit_OrderedObjectArrayPermutationUtil_0(): OrderedObjectArrayPermutationUtil {
        super.jinit_JObject_0();
        this.jfields_OrderedObjectArrayPermutationUtil();
        return this;
    }
    

    getNext(data: StaticArray<Object | null> | null): void {
        let length: i32 = data!.length;
        let i: i32 = length - 1;
        let tsUtil: TsUtil | null = TsUtil.getInstance(); if (JThrowable.pending !== null) return;
        while (tsUtil!.hashCode1(data![i - 1]) >= tsUtil!.hashCode1(data![i])) {
            i = i - 1;
        } if (JThrowable.pending !== null) return;
        let j: i32 = length;
        while (tsUtil!.hashCode1(data![j - 1]) <= tsUtil!.hashCode1(data![i - 1])) {
            j = j - 1;
        } if (JThrowable.pending !== null) return;
        this.swap(data, i - 1, j - 1); if (JThrowable.pending !== null) return;
        i++;
        j = length;
        while (i < j) {
            this.swap(data, i - 1, j - 1); if (JThrowable.pending !== null) return;
            i++;
            j--;
        } if (JThrowable.pending !== null) return;
    }
    

    swap(data: StaticArray<Object | null> | null, a: i32, b: i32): void {
        let temp: Object | null = data![a];
        data![a] = data![b];
        data![b] = temp;
    }
    

    factorial(dataLength: i32): i64 {
        let temp: i64 = (<i64>1);
        if (dataLength > 1) {
            for (let i: i32 = 1; i <= dataLength; i++) {
                temp *= (<i64>(i));
            }
        }
        return temp;
    }
    

    generate(data: StaticArray<Object | null> | null, visitor: Visitor | null): void {
        let iterations: i64 = this.factorial(data!.length); if (JThrowable.pending !== null) return;
        JSystem.print(jstr(this.TOTAL_ITERATIONS_TABLE)); if (JThrowable.pending !== null) return;
        JSystem.println(jstr(iterations)); if (JThrowable.pending !== null) return;
        for (let count: i64 = (<i64>0); count < iterations - (<i64>1); count++) {
            this.getNext(data); if (JThrowable.pending !== null) return;
            visitor!.visit(this); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        JSystem.println(jstr(this.FINISHED)); if (JThrowable.pending !== null) return;
    }
    

    static main(args: StaticArray<string | null> | null): void {
        let TOTAL: i32 = 7;
        let data: StaticArray<Object | null> | null = new StaticArray<Object | null>(TOTAL);
        for (let i: i32 = 0; i < TOTAL; i++) {
            data![i] = new ComparableObject().jinit_ComparableObject_0(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        JArrays.sort(data); if (JThrowable.pending !== null) return;
        let permutationVisitor: ObjectPermutationVisitor | null = new ObjectPermutationVisitor().jinit_ObjectPermutationVisitor_1(data); if (JThrowable.pending !== null) return;
        let ORIGINAL_DATA_LABEL: string | null = "Original Data: ";
        JSystem.print(jstr(ORIGINAL_DATA_LABEL)); if (JThrowable.pending !== null) return;
        permutationVisitor!.visit(data); if (JThrowable.pending !== null) return;
        OrderedObjectArrayPermutationUtil.getInstance()!.generate(data, permutationVisitor); if (JThrowable.pending !== null) return;
    }
}

