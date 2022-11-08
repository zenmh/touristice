import { Table } from "flowbite-react";
import React from "react";

const Blog = () => {
  return (
    <div className="mx-4">
      <h1 className="font-bold text-2xl text-center">
        Some Question That Should Know A Developer
      </h1>
      <div>
        <h3 className="font-bold text-xl">Difference between SQL and NoSQL.</h3>
        <Table striped={true}>
          <Table.Head>
            <Table.HeadCell>SQL</Table.HeadCell>
            <Table.HeadCell>NoSQl</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>
                SQL Databases are categorized as Relational Database Management
                System.
              </Table.Cell>
              <Table.Cell>
                NoSQL databases are categorized as Non-relational or distributed
                database system.
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>
                SQL Databases have fixed or static or predefined schema.
              </Table.Cell>
              <Table.Cell>NoSQL databases have dynamic schema.</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>
                SQL databases display data in from of tables so it is known as
                table-based database.
              </Table.Cell>
              <Table.Cell>
                NoSQL databases display data as collection of key-value pair,
                documents, graph databases or wide-column stores.
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>SQL databases are vertically scalable.</Table.Cell>
              <Table.Cell>
                NoSQL databases are horizontally scalable.
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>
                SQL databases are best suited for complex queries.
              </Table.Cell>
              <Table.Cell>
                NoSQL databases are not so good for complex queries because
                these are not as powerful as SQL queries.
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <hr className="my-3" />
      <div>
        <h3 className="font-bold text-xl">
          What is JWT, and how does it work?
        </h3>
        <p>
          <span className="font-bold">Ans : </span>What is JWT (JSON Web Token)?
          JSON Web Token (JWT) is an open standard (RFC 7519) for securely
          transmitting information between parties as JSON object. It is
          compact, readable and digitally signed using a private key/ or a
          public key pair by the Identity Provider(IdP).
        </p>
      </div>
      <hr className="my-3" />
      <div>
        <h3 className="font-bold text-xl">
          What is the difference between javascript and NodeJS?
        </h3>
        <p>
          <span className="font-bold">Ans : </span>JavaScript is a simple
          programming language that can be used with any browser that has the
          JavaScript Engine installed. Node. js, on the other hand, is an
          interpreter or execution environment for the JavaScript programming
          language.
        </p>
      </div>
      <hr className="my-3" />
      <div>
        <h3 className="font-bold text-xl">
          How does NodeJS handle multiple requests at the same time?
        </h3>
        <p>
          <span>Ans : </span> NodeJS receives multiple client requests and
          places them into EventQueue. NodeJS is built with the concept of
          event-driven architecture. NodeJS has its own EventLoop which is an
          infinite loop that receives requests and processes them.
        </p>
      </div>
    </div>
  );
};

export default Blog;
