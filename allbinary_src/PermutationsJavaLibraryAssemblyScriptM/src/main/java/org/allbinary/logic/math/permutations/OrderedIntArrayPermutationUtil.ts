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
// import org.allbinary.logic.util.visitor.Visitor
// import org.allbinary.logic.string.StringMaker

@global export class OrderedIntArrayPermutationUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.math.permutations.OrderedIntArrayPermutationUtil";
    }
    @lazy static jv_instance: OrderedIntArrayPermutationUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): OrderedIntArrayPermutationUtil | null {
        if (!OrderedIntArrayPermutationUtil.js_instance) {
            OrderedIntArrayPermutationUtil.js_instance = true;
            OrderedIntArrayPermutationUtil.jv_instance = new OrderedIntArrayPermutationUtil().jinit_OrderedIntArrayPermutationUtil_0();
        }
        return OrderedIntArrayPermutationUtil.jv_instance;
    }
    static set instance(value: OrderedIntArrayPermutationUtil | null) {
        OrderedIntArrayPermutationUtil.js_instance = true;
        OrderedIntArrayPermutationUtil.jv_instance = value;
    }
    TOTAL_ITERATIONS_TABLE: string | null = null;
    FINISHED: string | null = null;

    jfields_OrderedIntArrayPermutationUtil(): void {
    this.TOTAL_ITERATIONS_TABLE = "Total Iterations: ";
    this.FINISHED = "\nFINISHED";
    }
    

    static getInstance(): OrderedIntArrayPermutationUtil | null {
        return OrderedIntArrayPermutationUtil.instance;
    }
    

    jinit_OrderedIntArrayPermutationUtil_0(): OrderedIntArrayPermutationUtil {
        super.jinit_JObject_0();
        this.jfields_OrderedIntArrayPermutationUtil();
        return this;
    }
    

    getNext(data: StaticArray<i32> | null): void {
        let length: i32 = data!.length;
        let i: i32 = length - 1;
        while (data![i - 1] >= data![i]) {
            i = i - 1;
        }
        let j: i32 = length;
        while (data![j - 1] <= data![i - 1]) {
            j = j - 1;
        }
        this.swap(data, i - 1, j - 1); if (JThrowable.pending !== null) return;
        i++;
        j = length;
        while (i < j) {
            this.swap(data, i - 1, j - 1); if (JThrowable.pending !== null) return;
            i++;
            j--;
        } if (JThrowable.pending !== null) return;
    }
    

    swap(data: StaticArray<i32> | null, a: i32, b: i32): void {
        let temp: i32 = data![a];
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
    

    generate(data: StaticArray<i32> | null, visitor: Visitor | null): void {
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
        let TOTAL: i32 = 3;
        let data: StaticArray<i32> | null = new StaticArray<i32>(TOTAL);
        for (let i: i32 = 0; i < TOTAL; i++) {
            data![i] = i;
        }
        let permutationVisitor: IntPermutationVisitor | null = new IntPermutationVisitor().jinit_IntPermutationVisitor_1(data); if (JThrowable.pending !== null) return;
        let ORIGINAL_DATA_LABEL: string | null = "Original Data: ";
        JSystem.print(jstr(ORIGINAL_DATA_LABEL)); if (JThrowable.pending !== null) return;
        permutationVisitor!.print_2(data, new StringMaker().jinit_StringMaker_0()); if (JThrowable.pending !== null) return;
        OrderedIntArrayPermutationUtil.getInstance()!.generate(data, permutationVisitor); if (JThrowable.pending !== null) return;
    }
}

