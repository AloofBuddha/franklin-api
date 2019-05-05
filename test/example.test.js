const supertest = require("supertest");
const should = require("should");

// This agent refers to PORT where program is runninng.
const server = supertest.agent("http://localhost:3000");

describe("Test API",function(){
  
    it("should return api/user",function(done){  
      server
      .get("/api/user")
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err, res){
        // HTTP status should be 200
        should.equal(res.status, 200);
        done();
      });
    });

    it("should return api/user/:id",function(done){
        server
        .get("/api/user/1")
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          // HTTP status should be 200
          should.equal(res.status, 200);
          done();
        });
      });

    it("should put api/user/:id",function(done){
        server
        .put("/api/user/2")
        .send({ name: `"Amanda"` })
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          // HTTP status should be 200
          should.equal(res.status, 200);
          done();
        });
      });

      it("should post api/user",function(done){
        server
        .post("/api/user")
        .send({ name: `"Amanda"` })
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          // HTTP status should be 200
          should.equal(res.status, 200);
          done();
        });
      });


      it("should delete api/user/:id",function(done){
        // calling home page api
        server
        .delete("/api/user/8")
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          // HTTP status should be 200
          should.equal(res.status, 200);
          done();
        });
      });

      it("should return api/item",function(done){  
        server
        .get("/api/item")
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          // HTTP status should be 200
          should.equal(res.status, 200);
          done();
        });
      });
  
      it("should return api/item/:id",function(done){
          server
          .get("/api/item/1")
          .expect("Content-type",/json/)
          .expect(200)
          .end(function(err, res){
            should.equal(res.status, 200);
            done();
          });
        });
  
      it("should put api/item/:id",function(done){
          server
          .put("/api/item/2")
          .send({ name: `"My Item"` })
          .expect("Content-type", /json/)
          .expect(200)
          .end(function(err, res){
            should.equal(res.status, 200);
            done();
          });
        });
  
        it("should post api/item/",function(done){
          server
          .post("/api/item/")
          .send({ name: `"My Item"` })
          .expect("Content-type",/json/)
          .expect(200)
          .end(function(err, res){
            should.equal(res.status, 200);
            done();
          });
        });
  
  
        it("should delete api/item/:id",function(done){
          // calling home page api
          server
          .delete("/api/item/4")
          .expect("Content-type",/json/)
          .expect(200)
          .end(function(err, res){
            should.equal(res.status, 200);
            done();
          });
        });

        it("should return api/order",function(done){  
          server
          .get("/api/order")
          .expect("Content-type",/json/)
          .expect(200)
          .end(function(err, res){
            should.equal(res.status, 200);
            done();
          });
        });
    
        it("should return api/order/:id",function(done){
            server
            .get("/api/order/2")
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err, res){
                should.equal(res.status, 200);
              done();
            });
          });
    
        it("should put api/order/:id",function(done){
            server
            .put("/api/order/2")
            .send({ user_id: `2` })
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(err, res){
                should.equal(res.status, 200);
              done();
            });
          });
    
          it("should post api/order/",function(done){
            server
            .post("/api/order/")
            .send({ user_id: `2` })
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err, res){
                should.equal(res.status, 200);
              done();
            });
          });
    
    
          it("should delete api/order/:id",function(done){
            // calling home page api
            server
            .delete("/api/order/4")
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err, res){
                should.equal(res.status, 200);
              done();
            });
          });

          it("should get api/order_item",function(done){
            server
            .get("/api/order_item")
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err, res){
                should.equal(res.status, 200);
              done();
            });
          });

          it("should get api/order_item/order/3",function(done){
            server
            .get("/api/order_item/order/3")
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err, res){
                should.equal(res.status, 200);
              done();
            });
          });

          it("should get api/order_item/item/3",function(done){
            server
            .get("/api/order_item/item/3")
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err, res){
                should.equal(res.status, 200);
              done();
            });
          });

          it("should post api/order_item",function(done){
            server
            .post("/api/order_item")
            .send({ order_id: `2`, item_id: `2` })
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err, res){
                should.equal(res.status, 200);
              done();
            });
          });

          it("should delete api/order_item/:order_id",function(done){
            server
            .delete("/api/order_item/2")
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err, res){
                should.equal(res.status, 200);
              done();
            });
          });
  
  });