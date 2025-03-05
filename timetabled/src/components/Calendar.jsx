import React from "react";
import Event from "./Event";

//To create a React functional component, define a function using arrow function notation.
const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="time">8 am</td>
            <Event event="Starbucks ☕️" color="green" />
            <Event event="Starbucks ☕️" color="pink" />
            <Event event="Starbucks ☕️" color="blue" />
            <Event event="Starbucks ☕️" color="green" />
            <Event event="Starbucks ☕️" color="pink" />
            <Event event="Starbucks ☕️" color="blue" />
            <Event event="Starbucks ☕️" color="green" />
          </tr>

          <tr>
            <td className="time">9 am</td>
            <Event event="Art Institute ☕️" color="pink" />
            <td></td>
            <Event event="River Cruise ☕️" color="green" />
            <td></td>
            <Event event="Willis Tower" color="blue" />
            <td></td>
            <Event event="Sub way" color="pink" />
          </tr>

          <tr>
            <td className="time">10 am</td>
            <td></td>
            <Event event="River Cruise" color="blue" />

            <td></td>
            <Event event="Theatre" color="pink" />

            <td></td>
            <td></td>
            <Event event="Sub way" color="pink" />

            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">11 am</td>
            <Event event="Shopping!" color="pink" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Lunch Break" color="green" />

            <td></td>
            <td></td>

            <td></td>
          </tr>

          <tr>
            <td className="time">12 pm</td>
            <td></td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">1 pm</td>
            <Event event="Lunch Break" color="pink" />
            <Event event="Lunch Break" color="green" />
            <Event event="Lunch Break" color="pink" />
            <Event event="Lunch Break" color="green" />
            <td></td>

            <Event event="Lunch Break" color="pink" />
            <Event event="Lunch Break" color="green" />

            <td></td>
            <td></td>
            <td></td>

            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Swimming" color="green" />

            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Mc Donalds" color="green" />

            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <td></td>
            <Event event="Nandos" color="green" />

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">5 pm</td>
            <Event event="Theater" color="blue" />
            <Event event="Subway 🚊" color="pink" />
            <Event event="Subway 🚊" color="blue" />
            <Event event="Subway 🚊" color="pink" />
            <Event event="Subway 🚊" color="blue" />
            <td></td>
            <Event event="Subway 🚊" color="pink" />
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Calendar; //import it in our App.jsx
