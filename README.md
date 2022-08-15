# <strong>Routes</strong>
## <strong>Posts</strong>
#### <strong>POST /api/posts</strong>
```json
{
	"title": string,
	"body": string,
	"tags": string[]
}
```

#### <strong>GET	/api/posts?limit=10&page=0</strong>
* limit and page are optional query params, if you don't pass them, the default is:
```
page = 0
limit = 10
```
* First page is 0, maximum limit is 20.
#### <strong>GET	/api/posts/:id</strong>
* id must be a valid uuid
#### <strong>PUT	/api/posts/:id</strong>
* id must be a valid uuid
#### <strong>DELETE /api/posts/:id</strong>
* id must be a valid uuid
## <strong>Users</strong>
#### <strong>POST /api/users</strong>
```json
{
	"email": string,
	"password": string,
	"passwordConfirmation": string
}
```
## <strong>Login</strong>
#### <strong>POST /api/login</strong>
```json
{
	"email": string,
	"password": string
}
```

# <strong>Features</strong>
### <strong>Expressive Error Handling</strong>
Errors are a part of the core business, we should treat them as such. Every expected error is being typed, such as forbidden, unauthorized, validation and etc. Functions that can return a expected error have a special signature, like that:

```ts
type Ok = {
    // ...
}

function foo(...args: unknown): Either<Err, Ok>
```
Err and Either are special types, check the folder "src/shared".
### <strong>Highly Scalable and Maintainable</strong>
The main problem in programming is not to make things work, but to write things that work and are maintainable and readable for other developers. The use of SOLID principles, Clean Architecture and automated tests made that application super easy to maintain. Want to change mongoDb to some SQL-based database? Ok, it's just easy to do. Even more, want to completely remove Express and use Serverless or Fastify? Just do it, the application is ready.
### <strong>Typescript and ESLint</strong>
Typescript and Eslint can be your friends, since you use them correctly. By using Typescript features such as utility types, type checking and etc, you can highly increase the readabily and reusability of the code.
# <strong>Known Issues (sorry about that)</strong>
* Sometimes the application may not return the most appropriate error code, like returning unauthorized instead of forbidden.
* Lack of Swagger, I just didn't have time to implement.
* Validation is too complex and really should be refactored.
* Confused use of encapsulation, some functions returns the class PostEntity instead of a raw Post object and vice versa. Unfortunately, I didn't have time to think better about that.
* There is code duplication, every controller validate data the same way.
* Factories: some people say that the code shouldn't be responsible to build controllers, useCases and etc, instead, they argue that a framework like inversify should do it, but i didn't have the time to read more about.
* Singleton Pattern: I consider that <strong>the bigger problem</strong> of the entire application. Just search on google "when to use a singleton pattern" and you'll se dozens of controversial and different opinions, and again, I didn't have the time to properly think about that.