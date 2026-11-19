// Generated Code Do Not Modify
// package org.allbinary.graphics.form.item
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.logic.string.StringUtil

@global export class ABCustomGaugeItem extends ABCustomItem {

    jclassName(): string {
        return "org.allbinary.graphics.form.item.ABCustomGaugeItem";
    }
    @lazy static jv_NULL_GAUGE_ITEM: ABCustomGaugeItem | null = null;
    @lazy static js_NULL_GAUGE_ITEM: bool = false;
    static get NULL_GAUGE_ITEM(): ABCustomGaugeItem | null {
        if (!ABCustomGaugeItem.js_NULL_GAUGE_ITEM) {
            ABCustomGaugeItem.js_NULL_GAUGE_ITEM = true;
            ABCustomGaugeItem.jv_NULL_GAUGE_ITEM = new ABCustomGaugeItem().jinit_ABCustomGaugeItem_5(StringUtil.getInstance()!.EMPTY_STRING, 1, 0, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);
        }
        return ABCustomGaugeItem.jv_NULL_GAUGE_ITEM;
    }
    static set NULL_GAUGE_ITEM(value: ABCustomGaugeItem | null) {
        ABCustomGaugeItem.js_NULL_GAUGE_ITEM = true;
        ABCustomGaugeItem.jv_NULL_GAUGE_ITEM = value;
    }
    

    jinit_ABCustomGaugeItem_5(label: string | null, maxValue: i32, initialValue: i32, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): ABCustomGaugeItem {
        super.jinit_ABCustomItem_3(label, backgroundBasicColor, foregroundBasicColor);
        return this;
    }
}

