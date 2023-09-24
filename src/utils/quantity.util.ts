import { Quantity, UkraineQuantity } from '../interfaces';

class QuantityUtil {
  normalizeQuantity(quantity: string): Quantity {
    const ukraineQuantity = this.getUkraineQuantity(quantity);
    if (Object.values(Quantity).includes(quantity as Quantity)) {
      return quantity as Quantity;
    }
    let normalizedQuantity: Quantity = Quantity.Missed;
    if (ukraineQuantity) {
      normalizedQuantity =
        this.ukraineQuantityToEnglishQuantityMap[ukraineQuantity];
    }
    return normalizedQuantity;
  }

  getUkraineQuantity(quantity: string): undefined | UkraineQuantity {
    const ukraineQuantities = Object.values(UkraineQuantity);
    if (ukraineQuantities.includes(quantity as UkraineQuantity)) {
      return quantity as UkraineQuantity;
    }
  }

  quantityToUkraineQuantity(quantity: unknown): UkraineQuantity {
    if (typeof quantity === 'string') {
      const normalizedQuantity = this.normalizeQuantity(quantity);
      return this.quantityToUkraineQuantityMap[normalizedQuantity];
    }
    return UkraineQuantity.Missed;
  }

  private readonly ukraineQuantityToEnglishQuantityMap = {
    [UkraineQuantity.Piece]: Quantity.Piece,
    [UkraineQuantity.Kg]: Quantity.Kilogram,
    [UkraineQuantity.Package]: Quantity.Package,
    [UkraineQuantity.L]: Quantity.Liter,
    [UkraineQuantity.Missed]: Quantity.Missed,
  };

  private quantityToUkraineQuantityMap = {
    [Quantity.Piece]: UkraineQuantity.Piece,
    [Quantity.Kilogram]: UkraineQuantity.Kg,
    [Quantity.Package]: UkraineQuantity.Package,
    [Quantity.Liter]: UkraineQuantity.L,
    [Quantity.Missed]: UkraineQuantity.Missed,
  };
}

export const quantityUtil = new QuantityUtil();
