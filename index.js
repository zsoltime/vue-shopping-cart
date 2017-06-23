const pluralize = (number, n) => {
  const name = n || 'item';
  return (number === 1)
    ? `${number} ${name}`
    : `${number} ${name}s`;
};

const cart = new Vue({
  el: '#app',
  data: {
    cart: [],
    discount: 0,
    items: [
      {
        id: 1014,
        name: 'Chocolate Muffin',
        image: 'http://media.istockphoto.com/photos/delicious-homemade-chocolate-muffins-picture-id497522904?k=6&m=497522904&s=612x612&w=0&h=c0lTSWxefqaDVZFlfs9XFSzQNxy7-ie5PVCF8Nbf4sI=',
        price: 1.99,
        quantity: 0,
      }, {
        id: 1015,
        name: 'Chocolate Muffin w/ Syrup',
        image: 'http://media.istockphoto.com/photos/chocolate-muffins-with-chocolate-syrup-on-dark-background-picture-id505754192?k=6&m=505754192&s=612x612&w=0&h=BMTya5z43aOwFDvGGm37-VV4OMupCm1xSRqs1EOvdc8=',
        price: 2.19,
        quantity: 0,
      } , {
        id: 1016,
        name: 'Cranberry Muffin',
        image: 'http://media.istockphoto.com/photos/cranberry-muffins-picture-id627796786?k=6&m=627796786&s=612x612&w=0&h=2Br406UTrHLYnBwGKXscSkCAbFh1y2f2qMm9KOyFfEo=',
        price: 1.99,
        quantity: 0,
      }, {
        id: 1017,
        name: 'Pumpkin Muffin',
        image: 'http://media.istockphoto.com/photos/homemade-autumn-pumpkin-muffin-picture-id516688047?k=6&m=516688047&s=612x612&w=0&h=5zQg0oFjuxSm-oxSFePQ7IG0xSXWGR6d30P-RTejyeE=',
        price: 1.79,
        quantity: 0,
      }, {
        id: 1018,
        name: 'Coconut & Cinnamon Muffin',
        image: 'http://media.istockphoto.com/photos/homemade-coconut-cinnamon-muffins-picture-id615632966?k=6&m=615632966&s=612x612&w=0&h=46z-ZEQwdsx971D0fdE2bFoIkY01EaJNm_dlOol0AeU=',
        price: 2.19,
        quantity: 0,
      }, {
        id: 1019,
        name: 'Chocolate & Banana Muffin',
        image: 'http://media.istockphoto.com/photos/chocolate-muffins-with-banana-on-dark-background-picture-id505755238?k=6&m=505755238&s=612x612&w=0&h=31rtJVUqBSRq8hKiX8PL3LnMEH2sILGH-7NPiVM_Wtc=',
        price: 2.19,
        quantity: 0,
      }, {
        id: 1020,
        name: 'Lemon Muffin',
        image: 'http://media.istockphoto.com/photos/autumn-mood-lemon-muffins-and-mug-of-tea-picture-id618023198?k=6&m=618023198&s=612x612&w=0&h=Sgdpu4tSfP2G8bwUyF0wUMC9-QdON1yiUK0ipPRY7Mk=',
        price: 1.79,
        quantity: 0,
      }, {
        id: 1021,
        name: 'Apple & Oats Muffin',
        image: 'http://media.istockphoto.com/photos/muffins-with-apples-and-oat-flakes-picture-id498380108?k=6&m=498380108&s=612x612&w=0&h=2oQkcSgdNnc1M5cGA5hCbZY7BEzlP7MTfUTMyTMfTWI=',
        price: 1.79,
        quantity: 0,
      }, {
        id: 1022,
        name: 'Carrots Muffin',
        image: 'http://media.istockphoto.com/photos/fresh-homemade-delicious-carrot-muffins-picture-id532131600?k=6&m=532131600&s=612x612&w=0&h=qS8w69tmsRc0DapjyW35BNWC6pApig_dE6NqGqIRrzU=',
        price: 2.19,
        quantity: 0,
      }, {
        id: 1023,
        name: 'High Protein Muffin',
        image: 'http://media.istockphoto.com/photos/healthy-snack-pumpkin-and-feta-muffin-picture-id506763450?k=6&m=506763450&s=612x612&w=0&h=h5glXb5ztf8PmsZRxKVZfIi3JlkK5JE3cAXi4gaN5L4=',
        price: 2.79,
        quantity: 0,
      }, {
        id: 1024,
        name: 'Italian Muffin',
        image: 'http://media.istockphoto.com/photos/salty-snack-cakes-muffins-with-cheese-tomatoes-and-basil-picture-id585590584?k=6&m=585590584&s=612x612&w=0&h=Dq0QOdAwZ6rVpne43HGqJ-yV7AphUrS724QwYwxM1ic=',
        price: 1.99,
        quantity: 0,
      }, {
        id: 1025,
        name: 'Spinach & Feta Muffin',
        image: 'http://media.istockphoto.com/photos/snack-muffins-with-spinach-and-feta-cheese-picture-id494031324?k=6&m=494031324&s=612x612&w=0&h=KGVP2_IrfgckR_zUpGxzQ12968PF79KSWldQUoH_68A=',
        price: 2.49,
        quantity: 0,
      },
    ],
    showCart: false,
  },
  methods: {
    // should be able to reuse it in add() and remove()
    isInCart: function(item) {
      return this.cart.find(cart => cart.id === item.id);
    },
    add: function(item) {
      const findItem = cart => cart.id === item.id;
      const index = this.cart.findIndex(findItem);
      if (index >= 0) {
        const newItem = Object.assign(
          {},
          this.cart[index],
          { quantity: this.cart[index].quantity + 1 }
        );
        this.cart = [
          ...this.cart.slice(0, index),
          newItem,
          ...this.cart.slice(index + 1),
        ];
      } else {
        const newItem = Object.assign(
          item,
          { quantity: 1 }
        );
        this.cart.push(newItem);
      }
    },
    remove: function(item) {
      const findItem = cart => cart.id === item.id;
      const index = this.cart.findIndex(findItem);
      this.cart = [
        ...this.cart.slice(0, index),
        ...this.cart.slice(index + 1),
      ];
    },
    addToCartLabel: function(item) {
      if (this.isInCart(item)) {
        const quantity = this.isInCart(item).quantity;
        return `Add to cart (${pluralize(quantity, 'item')} already in cart)`;
      } else {
        return 'Add to cart';
      }
    },
  },
  computed: {
    cartLabel: function() {
      return `${pluralize(this.totalItems, 'item')} in cart`;
    },
    totalPrice: function() {
      let total = this.cart.reduce((prev, curr) => {
        return prev + (curr.quantity * curr.price);
      }, 0);

      // let 'em save some money
      this.discount = (this.totalItems >= 12) ? (total * 100 / 1000) : 0;

      return (total - this.discount);
    },
    totalItems: function() {
      return this.cart.reduce((prev, curr) => prev + curr.quantity, 0);
    },
  },
  filters: {
    currency: function(amount) {
      return amount.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP',
      });
    },
    pluralize: pluralize,
  },
});
