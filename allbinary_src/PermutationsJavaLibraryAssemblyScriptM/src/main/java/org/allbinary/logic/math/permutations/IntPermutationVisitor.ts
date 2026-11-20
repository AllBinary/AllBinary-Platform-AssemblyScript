// Generated Code Do Not Modify
// package org.allbinary.logic.math.permutations
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.util.visitor.Visitor
// import org.allbinary.string.CommonSeps

@global export class IntPermutationVisitor extends Visitor {

    jclassName(): string {
        return "org.allbinary.logic.math.permutations.IntPermutationVisitor";
    }
    data: StaticArray<i32> | null = null;
    stringBuilder: StringMaker | null = null;

    jfields_IntPermutationVisitor(): void {
    
    this.stringBuilder = new StringMaker().jinit_StringMaker_0();
    }
    

    jinit_IntPermutationVisitor_1(data: StaticArray<i32> | null): IntPermutationVisitor {
        super.jinit_Visitor_0();
        this.jfields_IntPermutationVisitor();
        this.data = data;
        return this;
    }
    

    visit_1_Object(anyType: Object | null): Object | null {
        this.stringBuilder!.delete_(0, this.stringBuilder!.length()); if (JThrowable.pending !== null) return null;
        this.print_2(this.data, this.stringBuilder); if (JThrowable.pending !== null) return null;
        return NullUtil.getInstance()!.NULL_OBJECT;
    }
    

    print_1(data: StaticArray<i32> | null): void {
        let stringBuilder: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        this.print_2(data, stringBuilder); if (JThrowable.pending !== null) return;
    }
    

    print_2(data: StaticArray<i32> | null, stringBuilder: StringMaker | null): void {
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return;
        let size: i32 = data!.length;
        for (let i: i32 = 0; i < size; i++) {
            stringBuilder!.appendint(data![i]); if (JThrowable.pending !== null) return;
            stringBuilder!.append(commonSeps!.SPACE); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        JSystem.println(jstr(JObject.jtoString(stringBuilder))); if (JThrowable.pending !== null) return;
    }
}

