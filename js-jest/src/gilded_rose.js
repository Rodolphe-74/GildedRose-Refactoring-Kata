// Definition de la classe d'un produit
class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

// Definition de la classe di magasin
class Shop {
  constructor(items=[]){
    this.items = items;
  }
  // Mise à jour de la qualité
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let name = this.items[i].name
      let quality = this.items[i].quality
      let sellIn = this.items[i].sellIn

      if (name !== 'Aged Brie' && name !== 'Backstage passes') {
        this.normalProduct(i)
      } else {
        if (quality < 50) {
          this.increaseOne(i)
          if (name === 'Backstage passes') {
            this.backStage(i)
          }
        }
      }
      if (name !== 'Sulfuras') {
        sellIn = sellIn - 1;
      }
      if (sellIn < 0) {
        if (name !== 'Aged Brie') {
          if (name !== 'Backstage passes') {
            if (quality > 0) {
              if (name !== 'Sulfuras') {
                this.decreaseOne(i);
              }
            }
          } else {
            this.items[i].quality = 0;
          }
        } else {
          if (quality < 50) {
            this.increaseOne(i)
          }
        }
      }
    }

    return this.items;
  }

  increaseOne(i){
    this.items[i].quality = this.items[i].quality + 1;
  }

  decreaseOne(i){
    this.items[i].quality = this.items[i].quality - 1;
  }

  normalProduct(i){
    if (this.items[i].quality > 0) {
      if (this.items[i].name !== 'Sulfuras') {
        this.decreaseOne(i);
      }
    }
  }

  backStage(i){
    if (this.items[i].sellIn < 11) {
      if (this.items[i].quality < 50) {
        this.increaseOne(i)
      }
    }
    if (this.items[i].sellIn < 6) {
      if (this.items[i].quality < 50) {
        this.increaseOne(i)
      }
    }
  }

}

module.exports = {
  Item,
  Shop
}
