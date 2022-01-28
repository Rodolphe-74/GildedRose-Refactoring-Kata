const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", () => {
  const gildedRose = new Shop(
      [new Item("Sulfuras", 0, 80),
        new Item('Aged Brie', 0, 20),
        new Item('Article', 20, 30),
        new Item('Article périmé', 0, 20),
        new Item('Backstage passes', 8, 20),
        new Item('Backstage passes', 4, 20),
        new Item('Backstage passes', -1, 20)]
  );
  const agedBrieBU = gildedRose.items[1].quality
  const BP1BU = gildedRose.items[4].quality
  const BP2BU = gildedRose.items[5].quality
  const sellInBU = gildedRose.items[3].sellIn
  const qualityBU = gildedRose.items[3].quality
  const items = gildedRose.updateQuality();

  it("Qualité non négative", () => {
    for(let i=0; i<items.length ; i++){
      expect(items[i].quality).toBeGreaterThan(-1);
    }
  });

  it("Qualité non supérieure à 50", () => {
    for(let i=0; i<items.length ; i++){
      if(items[i].name !== 'Sulfuras') {
        expect(items[i].quality).toBeGreaterThan(-1);
      }
    }
  });

  it("Aged Brie", () => {
    if(items[1].quality<50) {
      expect(items[1].quality).toEqual(agedBrieBU + 2);
    }
  });

  it("Sulfuras", () => {
      expect(items[0].quality).toEqual(80);
      expect(items[0].sellIn).toEqual(0);
  });

  it("Article qualite", () => {
    if(sellInBU === 0){
      expect(items[3].quality).toEqual(qualityBU-2);
    }
    else{
      expect(items[3].quality).toEqual(qualityBU-1);
    }
  });

  it("Backstage passes", () => {
      expect(items[4].quality).toEqual(BP1BU+2);
      expect(items[5].quality).toEqual(BP2BU+3);
      expect(items[6].quality).toEqual(0);
  });

});
