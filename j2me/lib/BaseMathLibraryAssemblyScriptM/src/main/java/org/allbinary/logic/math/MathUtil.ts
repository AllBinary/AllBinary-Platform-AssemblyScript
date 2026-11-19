// Generated Code Do Not Modify
// package org.allbinary.logic.math
// import jsinterop.annotations.JsType

@global export class MathUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.math.MathUtil";
    }
    @lazy static jv_instance: MathUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): MathUtil | null {
        if (!MathUtil.js_instance) {
            MathUtil.js_instance = true;
            MathUtil.jv_instance = new MathUtil().jinit_MathUtil_0();
        }
        return MathUtil.jv_instance;
    }
    static set instance(value: MathUtil | null) {
        MathUtil.js_instance = true;
        MathUtil.jv_instance = value;
    }
    ACCURACY: i32 = 0;

    jfields_MathUtil(): void {
    this.ACCURACY = 100;
    }

    jinit_MathUtil_0(): MathUtil {
        super.jinit_JObject_0();
        this.jfields_MathUtil();
        return this;
    }
    

    static getInstance(): MathUtil | null {
        return MathUtil.instance;
    }
    

    getTotalDigits(digits: i32): i32 {
        let total: i32 = 0;
        while (digits > 0) {
            digits = digits / 10;
            total++;
        }
        return total;
    }
    

    sqrt(value: i32): i32 {
        if (value <= 1) {
            return value;
        }
        let accumulated: i32 = value >> 1;
        let result: i32 = (accumulated + (value / accumulated)) >> 1;
        do {
            accumulated = result;
            result = (accumulated + (value / accumulated)) >> 1;
        } while (accumulated > result);
        return accumulated;
    }
    

    sqrtd(x: i32): f64 {
        if (x == 0) {
            return (<f64>((<f32>0.0)));
        }
        if (x < 0) {
            return (<f64>(-(<f32>1.0)));
        }
        let result: f64 = (<f64>(x));
        for (let index: i32 = 0; index < this.ACCURACY; index++) {
            result = (result + ((<f64>(x)) / result)) / 2.0;
        }
        return result;
    }
    

    abs(value: i32): i32 {
        return ((value < 0) ? -value : value);
    }
    

    abslong(value: i64): i64 {
        return ((value < (<i64>0)) ? -value : value);
    }
    

    min(value: i32, value2: i32): i32 {
        return ((value <= value2) ? value : value2);
    }
    

    max(value: i32, value2: i32): i32 {
        return ((value >= value2) ? value : value2);
    }
}

