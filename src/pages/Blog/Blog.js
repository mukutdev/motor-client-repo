import React from "react";
import BgElement from "../../shared/BgElement/BgElement";

const Blog = () => {
  return (
    <section>
      <BgElement content="Blogs"></BgElement>
      <div className="container mx-auto md:my-36">
        <div className="md:w-1/2 mx-auto shadow-md p-8 rounded-md">
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title text-lg font-medium">
            What are the different ways to manage a state in a React application?
            </div>
            <div className="collapse-content">
              <p className="text-base font-medium">
              When we talk about state in our applications, it’s important to be clear about what types of state actually matter.There are four main types of state you need to properly manage in your React apps:<br/>
              1.Local state<br/>
              2.Global state<br/>
              3.Server state<br/>
              4.URL state
              </p>
            </div>
          </div>
          <div
            tabIndex={1}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5"
          >
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title text-lg font-medium">
            How does prototypical inheritance work?
            </div>
            <div className="collapse-content">
              <p className="text-base font-medium">
              The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object
              </p>
            </div>
          </div>
          <div
            tabIndex={2}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5"
          >
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title text-lg font-medium">
            What is a unit test? Why should we write unit tests?
            </div>
            <div className="collapse-content">
              <p className="text-base font-medium">
              Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
              </p>
            </div>
          </div>
          <div
            tabIndex={3}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5"
          >
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title text-lg font-medium">
            React vs. Angular vs. Vue?
            </div>
            <div className="collapse-content">
              <p className="text-base font-medium">
              <strong>React</strong> is considered a UI library. They define themselves as:“A JavaScript library for building user interfaces”Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.<br/>
              <strong>Vue :</strong> The structure in Vue.js is pretty simple. All pieces are meant to be self-contained, reusable components.A minimal example of a Vue.js application could be like this:Components in Vue.js are written in Single File Components (SFC) with the extension .vue. Inside these files, there are:The JavaScript logic The HTML template (Vue.js has its own templates) The stylesheet in either CSS or SCSS.<br/>
              <strong>Angular</strong> is built entirely in Typescript and every project on Angular is structured in modules, components and services. At least, each module must have a root module and a root component.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
