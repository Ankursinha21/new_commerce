// import "./styles/Checkout.css";
import "./styles/Temp.css"
import {NavLink} from "react-router-dom"

function Checkout() {
  return (
    <>
     <main className="holder">
        <h3>Checkout</h3>
        <section class="checkout-form">
          <form action="https://formspree.io/f/mqkjywyo" method="POST">
            <h6>Contact information</h6>
            <div class="form-control">
              <label for="checkout-email">E-mail</label>
              <div>
                <span class="fa fa-envelope"></span>
                <input
                  type="email"
                  id="checkout-email"
                  name="Email"
                  placeholder="Enter your email..."
                ></input>
                .
              </div>
            </div>
            <div class="form-control">
              <label for="checkout-phone">Phone</label>
              <div>
                <span class="fa fa-phone"></span>
                <input
                  type="tel"
                  name="Phone"
                  id="checkout-phone"
                  placeholder="Enter you phone..."
                ></input>
                .
              </div>
            </div>
            <br></br>
            <h6>Shipping address</h6>
            <div class="form-control">
              <label for="checkout-name">Full name</label>
              <div>
                <span class="fa fa-user-circle"></span>
                <input
                  type="text"
                  id="checkout-name"
                  name="Name"
                  placeholder="Enter you name..."
                ></input>
              </div>
            </div>
            <div class="form-control">
              <label for="checkout-address">Address</label>
              <div>
                <span class="fa fa-home"></span>
                <input
                  type="text"
                  name="Address"
                  id="checkout-address"
                  placeholder="Your address..."
                ></input>
              </div>
            </div>
            <div class="form-control">
              <label for="checkout-city">City</label>
              <div>
                <span class="fa fa-building"></span>
                <input
                  type="text"
                  name="City"
                  id="checkout-city"
                  placeholder="Your city..."
                ></input>
              </div>
            </div>
            <div class="form-group">
              <div class="form-control">
                <label for="checkout-country">Country</label>
                <div>
                  <span class="fa fa-globe"></span>
                  <input
                    type="text"
                    name="Country"
                    id="checkout-country"
                    placeholder="Your country..."
                    list="country-list"
                  ></input>
                  <datalist id="country-list">
                    <option value="India"></option>
                    <option value="USA"></option>
                    <option value="Russia"></option>
                    <option value="Japan"></option>
                    <option value="Egypt"></option>
                  </datalist>
                </div>
              </div>
              <div class="form-control">
                <label for="checkout-postal">Postal code</label>
                <div>
                  <span class="fa fa-archive"></span>
                  <input
                    type="numeric"
                    name="Postal Code"
                    id="checkout-postal"
                    placeholder="Your postal code..."
                  ></input>
                </div>
              </div>
            </div>
            <div class="form-control checkbox-control">
              <input
                type="checkbox"
                name="CheckBox"
                id="checkout-checkbox"
              ></input>
              <label for="checkout-checkbox">
                Save this information for next time
              </label>
            </div>
            <div class="form-control-btn">
              {/* <NavLink to="/order_placed"><button type="submit">Continue</button></NavLink> */}
              <button type="submit">Continue</button>
              
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Checkout;
