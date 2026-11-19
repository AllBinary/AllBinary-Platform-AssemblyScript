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
// package org.allbinary.logic.system.security.crypt
// import org.allbinary.TsUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.system.security.crypt.jcehelper.AbCrypt
// import org.allbinary.logic.system.security.crypt.jcehelper.KeySpecFactory
// import org.allbinary.string.CommonStrings

@global export class WeakCrypt extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.crypt.WeakCrypt";
    }
    @lazy static jv_keys: StaticArray<string | null> | null = null;
    @lazy static js_keys: bool = false;
    static get keys(): StaticArray<string | null> | null {
        if (!WeakCrypt.js_keys) {
            WeakCrypt.js_keys = true;
            WeakCrypt.jv_keys = StaticArray.fromArray<string | null>(["qwres6qewrupoi1132790jfahleavi89398", "143uk32lngf8675gt1tv9214uvt924ut9u9", "12kvjlvlkv11445v12951v512v9m51295v1", "gampipoiupg4g43y5u238tu2485u20u0932", "a93u5uu02s2d2g3259u4395u409u093u9vu", "nlkxzj90je3mln9l8l89qjf0j3v50j23r9j", "2lk5fn5j23nr8f0233vq35n23jn58vhy843", "9q24334m598t092tkn2iv0982456n425j9g", "5m9uvmt9436243m5v34g09d43i52ki35g99", "n123lr1iubiu2br32lv32rbu23b32ub2rlb", "va0u0iovji2ojpvj2oij22poiu4ov2uv28v", "bkk80gn2v9uc902340ut209pcup0u09utc9", "mn32m32neee23c42fn32nf3mf2n3fn2m3fm", "zcxpozo3423voizupovsijevnv3n33o33n3", "v0345324thv93h03893893vh893v8h3vhzz", "v8na898v8wyef9ty39yv98yaw39yeeyf8ye", "45zd36d34jg09434hfshp8uj9sy8s7cyr78", "b098yy0908vdvh983b2lb327980a76s5e5e", "v90y9v9p8y3r98pagsdgsagyr6y3985yhfh", "vblkzhhzp8yvzi8u4t9856456zy3rv8a388", "da7696023rgf28dssfa98asd879hg32hewe", "afo7d6ffkjb3jr3i34gb24ytuvu3jr3uryf", "4gijvqo8vq984hv984hj5j3511h832hf833"]);
        }
        return WeakCrypt.jv_keys;
    }
    static set keys(value: StaticArray<string | null> | null) {
        WeakCrypt.js_keys = true;
        WeakCrypt.jv_keys = value;
    }
    @lazy static jv_KEYMAX: i32 = 0;
    @lazy static js_KEYMAX: bool = false;
    static get KEYMAX(): i32 {
        if (!WeakCrypt.js_KEYMAX) {
            WeakCrypt.js_KEYMAX = true;
            WeakCrypt.jv_KEYMAX = WeakCrypt.keys!.length;
        }
        return WeakCrypt.jv_KEYMAX;
    }
    static set KEYMAX(value: i32) {
        WeakCrypt.js_KEYMAX = true;
        WeakCrypt.jv_KEYMAX = value;
    }
    tsUtil: TsUtil | null = null;
    abCrypt: AbCrypt | null = null;

    jfields_WeakCrypt(): void {
    this.tsUtil = TsUtil.getInstance();
    this.abCrypt = new AbCrypt().jinit_AbCrypt_1(KeySpecFactory.getInstance()!.DES);
    }
    

    jinit_WeakCrypt_1(key: i32): WeakCrypt {
        super.jinit_JObject_0();
        this.jfields_WeakCrypt();
        do {
            this.abCrypt!.init(WeakCrypt.keys![key]); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return this;
            PreLogUtil.putOE(commonStrings!.EXCEPTION, this, "SuperCrypt(key)", e); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    encrypt(value: string | null): string | null {
        do {
            let crypted: StaticArray<i8> | null = this.abCrypt!.encrypt(this.tsUtil!.getByteArray(value)); if (JThrowable.pending !== null) break;
            return DatabaseEncoder.encode(crypted);
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.putOE("Encrypt Failed", this, "encrypt", e); if (JThrowable.pending !== null) return null;
            return StringUtil.getInstance()!.EMPTY_STRING;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    decrypt(value: string | null): string | null {
        do {
            let decrypted: StaticArray<i8> | null = this.abCrypt!.decrypt(DatabaseEncoder.decode(value)); if (JThrowable.pending !== null) break;
            return JString.new1(decrypted);
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.putOE("decrypt Failed", this, "decrypt", e); if (JThrowable.pending !== null) return null;
            return StringUtil.getInstance()!.EMPTY_STRING;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

