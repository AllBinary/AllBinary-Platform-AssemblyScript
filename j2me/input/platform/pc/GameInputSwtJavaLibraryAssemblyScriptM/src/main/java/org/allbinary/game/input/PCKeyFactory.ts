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
// package org.allbinary.game.input
// import org.allbinary.math.PositionStrings
// import org.allbinary.string.CommonPhoneStrings
// import org.allbinary.string.CommonSeps

@global export class PCKeyFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.PCKeyFactory";
    }
    @lazy static jv_SINGLETON: PCKeyFactory | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): PCKeyFactory | null {
        if (!PCKeyFactory.js_SINGLETON) {
            PCKeyFactory.js_SINGLETON = true;
            PCKeyFactory.jv_SINGLETON = new PCKeyFactory().jinit_PCKeyFactory_0();
        }
        return PCKeyFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: PCKeyFactory | null) {
        PCKeyFactory.js_SINGLETON = true;
        PCKeyFactory.jv_SINGLETON = value;
    }
    UNKNOWN: PCGameKey | null = null;
    ENTER: PCGameKey | null = null;
    _A: PCGameKey | null = null;
    _B: PCGameKey | null = null;
    _C: PCGameKey | null = null;
    _D: PCGameKey | null = null;
    _E: PCGameKey | null = null;
    _F: PCGameKey | null = null;
    _G: PCGameKey | null = null;
    _H: PCGameKey | null = null;
    _I: PCGameKey | null = null;
    _J: PCGameKey | null = null;
    _K: PCGameKey | null = null;
    _L: PCGameKey | null = null;
    _M: PCGameKey | null = null;
    _N: PCGameKey | null = null;
    _O: PCGameKey | null = null;
    _P: PCGameKey | null = null;
    _Q: PCGameKey | null = null;
    _R: PCGameKey | null = null;
    _S: PCGameKey | null = null;
    _T: PCGameKey | null = null;
    _U: PCGameKey | null = null;
    _V: PCGameKey | null = null;
    _W: PCGameKey | null = null;
    _X: PCGameKey | null = null;
    _Y: PCGameKey | null = null;
    _Z: PCGameKey | null = null;
    a: PCGameKey | null = null;
    b: PCGameKey | null = null;
    c: PCGameKey | null = null;
    d: PCGameKey | null = null;
    e: PCGameKey | null = null;
    f: PCGameKey | null = null;
    g: PCGameKey | null = null;
    h: PCGameKey | null = null;
    i: PCGameKey | null = null;
    j: PCGameKey | null = null;
    k: PCGameKey | null = null;
    l: PCGameKey | null = null;
    m: PCGameKey | null = null;
    n: PCGameKey | null = null;
    o: PCGameKey | null = null;
    p: PCGameKey | null = null;
    q: PCGameKey | null = null;
    r: PCGameKey | null = null;
    s: PCGameKey | null = null;
    t: PCGameKey | null = null;
    u: PCGameKey | null = null;
    v: PCGameKey | null = null;
    w: PCGameKey | null = null;
    x: PCGameKey | null = null;
    y: PCGameKey | null = null;
    z: PCGameKey | null = null;
    ZERO: PCGameKey | null = null;
    ONE: PCGameKey | null = null;
    TWO: PCGameKey | null = null;
    THREE: PCGameKey | null = null;
    FOUR: PCGameKey | null = null;
    FIVE: PCGameKey | null = null;
    SIX: PCGameKey | null = null;
    SEVEN: PCGameKey | null = null;
    EIGHT: PCGameKey | null = null;
    NINE: PCGameKey | null = null;
    DPAD_UP: PCGameKey | null = null;
    DPAD_DOWN: PCGameKey | null = null;
    DPAD_LEFT: PCGameKey | null = null;
    DPAD_RIGHT: PCGameKey | null = null;
    DPAD_UP2: PCGameKey | null = null;
    DPAD_DOWN2: PCGameKey | null = null;
    DPAD_LEFT2: PCGameKey | null = null;
    DPAD_RIGHT2: PCGameKey | null = null;
    COMMA: PCGameKey | null = null;
    SPACE: PCGameKey | null = null;
    DEL: PCGameKey | null = null;
    STAR: PCGameKey | null = null;
    QUESTION: PCGameKey | null = null;
    PERIOD: PCGameKey | null = null;
    ESCAPE: PCGameKey | null = null;
    BACK_SPACE: PCGameKey | null = null;

    jfields_PCKeyFactory(): void {
    this.UNKNOWN = new PCGameKey().jinit_PCGameKey_2(254, "UNKNOWN");
    this.ENTER = new PCGameKey().jinit_PCGameKey_2(13, "Enter");
    this._A = new PCGameKey().jinit_PCGameKey_2(65, "A");
    this._B = new PCGameKey().jinit_PCGameKey_2(66, "B");
    this._C = new PCGameKey().jinit_PCGameKey_2(67, "C");
    this._D = new PCGameKey().jinit_PCGameKey_2(68, "D");
    this._E = new PCGameKey().jinit_PCGameKey_2(69, "E");
    this._F = new PCGameKey().jinit_PCGameKey_2(70, "F");
    this._G = new PCGameKey().jinit_PCGameKey_2(71, "G");
    this._H = new PCGameKey().jinit_PCGameKey_2(72, "H");
    this._I = new PCGameKey().jinit_PCGameKey_2(73, "I");
    this._J = new PCGameKey().jinit_PCGameKey_2(74, "J");
    this._K = new PCGameKey().jinit_PCGameKey_2(75, "K");
    this._L = new PCGameKey().jinit_PCGameKey_2(76, "L");
    this._M = new PCGameKey().jinit_PCGameKey_2(77, "M");
    this._N = new PCGameKey().jinit_PCGameKey_2(78, "N");
    this._O = new PCGameKey().jinit_PCGameKey_2(79, "O");
    this._P = new PCGameKey().jinit_PCGameKey_2(80, "P");
    this._Q = new PCGameKey().jinit_PCGameKey_2(81, "Q");
    this._R = new PCGameKey().jinit_PCGameKey_2(82, "R");
    this._S = new PCGameKey().jinit_PCGameKey_2(83, "S");
    this._T = new PCGameKey().jinit_PCGameKey_2(84, "T");
    this._U = new PCGameKey().jinit_PCGameKey_2(85, "U");
    this._V = new PCGameKey().jinit_PCGameKey_2(86, "V");
    this._W = new PCGameKey().jinit_PCGameKey_2(87, "W");
    this._X = new PCGameKey().jinit_PCGameKey_2(88, "X");
    this._Y = new PCGameKey().jinit_PCGameKey_2(89, "Y");
    this._Z = new PCGameKey().jinit_PCGameKey_2(90, "Z");
    this.a = new PCGameKey().jinit_PCGameKey_2(97, "a");
    this.b = new PCGameKey().jinit_PCGameKey_2(98, "b");
    this.c = new PCGameKey().jinit_PCGameKey_2(99, "c");
    this.d = new PCGameKey().jinit_PCGameKey_2(100, "d");
    this.e = new PCGameKey().jinit_PCGameKey_2(101, "e");
    this.f = new PCGameKey().jinit_PCGameKey_2(102, "f");
    this.g = new PCGameKey().jinit_PCGameKey_2(103, "g");
    this.h = new PCGameKey().jinit_PCGameKey_2(104, "h");
    this.i = new PCGameKey().jinit_PCGameKey_2(105, "i");
    this.j = new PCGameKey().jinit_PCGameKey_2(106, "j");
    this.k = new PCGameKey().jinit_PCGameKey_2(107, "k");
    this.l = new PCGameKey().jinit_PCGameKey_2(108, "l");
    this.m = new PCGameKey().jinit_PCGameKey_2(109, "m");
    this.n = new PCGameKey().jinit_PCGameKey_2(110, "n");
    this.o = new PCGameKey().jinit_PCGameKey_2(111, "o");
    this.p = new PCGameKey().jinit_PCGameKey_2(112, "p");
    this.q = new PCGameKey().jinit_PCGameKey_2(113, "q");
    this.r = new PCGameKey().jinit_PCGameKey_2(114, "r");
    this.s = new PCGameKey().jinit_PCGameKey_2(115, "s");
    this.t = new PCGameKey().jinit_PCGameKey_2(116, "t");
    this.u = new PCGameKey().jinit_PCGameKey_2(117, "u");
    this.v = new PCGameKey().jinit_PCGameKey_2(118, "v");
    this.w = new PCGameKey().jinit_PCGameKey_2(119, "w");
    this.x = new PCGameKey().jinit_PCGameKey_2(120, PositionStrings.getInstance()!.X);
    this.y = new PCGameKey().jinit_PCGameKey_2(121, PositionStrings.getInstance()!.Y);
    this.z = new PCGameKey().jinit_PCGameKey_2(122, "z");
    this.ZERO = new PCGameKey().jinit_PCGameKey_2(48, CommonPhoneStrings.getInstance()!.ZERO);
    this.ONE = new PCGameKey().jinit_PCGameKey_2(49, CommonPhoneStrings.getInstance()!.ONE);
    this.TWO = new PCGameKey().jinit_PCGameKey_2(50, CommonPhoneStrings.getInstance()!.TWO);
    this.THREE = new PCGameKey().jinit_PCGameKey_2(51, CommonPhoneStrings.getInstance()!.THREE);
    this.FOUR = new PCGameKey().jinit_PCGameKey_2(52, CommonPhoneStrings.getInstance()!.FOUR);
    this.FIVE = new PCGameKey().jinit_PCGameKey_2(53, CommonPhoneStrings.getInstance()!.FIVE);
    this.SIX = new PCGameKey().jinit_PCGameKey_2(54, CommonPhoneStrings.getInstance()!.SIX);
    this.SEVEN = new PCGameKey().jinit_PCGameKey_2(55, CommonPhoneStrings.getInstance()!.SEVEN);
    this.EIGHT = new PCGameKey().jinit_PCGameKey_2(56, CommonPhoneStrings.getInstance()!.EIGHT);
    this.NINE = new PCGameKey().jinit_PCGameKey_2(57, CommonPhoneStrings.getInstance()!.NINE);
    this.DPAD_UP = new PCGameKey().jinit_PCGameKey_2(38, CommonPhoneStrings.getInstance()!.UP);
    this.DPAD_DOWN = new PCGameKey().jinit_PCGameKey_2(40, CommonPhoneStrings.getInstance()!.DOWN);
    this.DPAD_LEFT = new PCGameKey().jinit_PCGameKey_2(37, CommonPhoneStrings.getInstance()!.LEFT);
    this.DPAD_RIGHT = new PCGameKey().jinit_PCGameKey_2(39, CommonPhoneStrings.getInstance()!.RIGHT);
    this.DPAD_UP2 = this.DPAD_UP;
    this.DPAD_DOWN2 = this.DPAD_DOWN;
    this.DPAD_LEFT2 = this.DPAD_LEFT;
    this.DPAD_RIGHT2 = this.DPAD_RIGHT;
    this.COMMA = new PCGameKey().jinit_PCGameKey_2(44, "COMMA");
    this.SPACE = new PCGameKey().jinit_PCGameKey_2(32, "SPACE");
    this.DEL = new PCGameKey().jinit_PCGameKey_2(46, "DEL");
    this.STAR = new PCGameKey().jinit_PCGameKey_2(42, CommonPhoneStrings.getInstance()!.STAR);
    this.QUESTION = new PCGameKey().jinit_PCGameKey_2(47, "?");
    this.PERIOD = new PCGameKey().jinit_PCGameKey_2(46, CommonSeps.getInstance()!.PERIOD);
    this.ESCAPE = new PCGameKey().jinit_PCGameKey_2(27, "Esc");
    this.BACK_SPACE = new PCGameKey().jinit_PCGameKey_2(8, "Backspace");
    }

    jinit_PCKeyFactory_0(): PCKeyFactory {
        super.jinit_JObject_0();
        this.jfields_PCKeyFactory();
        return this;
    }
    

    static getInstance(): PCKeyFactory | null {
        return PCKeyFactory.SINGLETON;
    }
    

    isSubmission(input: Input | null): bool {
        if (input == this.ENTER) {
            return true;
        }
        return false;
    }
    

    isDelete(input: Input | null): bool {
        if (input == this.DEL) {
            return true;
        }
        return false;
    }
    

    isBackSpace(input: Input | null): bool {
        if (input == this.BACK_SPACE) {
            return true;
        }
        return false;
    }
    

    isUp(input: Input | null): bool {
        if (input == this.DPAD_UP || input == this.DPAD_UP2) {
            return true;
        }
        return false;
    }
    

    isDown(input: Input | null): bool {
        if (input == this.DPAD_DOWN || input == this.DPAD_DOWN2) {
            return true;
        }
        return false;
    }
    

    isLeft(input: Input | null): bool {
        if (input == this.DPAD_LEFT || input == this.DPAD_LEFT2) {
            return true;
        }
        return false;
    }
    

    isRight(input: Input | null): bool {
        if (input == this.DPAD_RIGHT || input == this.DPAD_RIGHT2) {
            return true;
        }
        return false;
    }
    

    isEnter(input: Input | null): bool {
        if (input == this.ENTER) {
            return true;
        }
        return false;
    }
}

