const user = {
  username: "testUser",
  password: "testPassword",
  name: "testName",
};

const user2 = {
  username: "testUser2",
  password: "testPassword2",
  name: "testName2",
};

const blog = {
  title: "Test are in fact pretty funs",
  url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
  author: "Nasoa.K",
};

const login = async (page, content) => {
  const usrElt = await page.getByLabel("username");
  const pswdElt = await page.getByLabel("password");
  const submitElt = await page.getByRole("button", { name: "start" });

  await usrElt.fill(content.username);
  await pswdElt.fill(content.password);
  await submitElt.click();
};

const logout = async (page) => {
  // await page.getByRole("button", { name: "logout" }).click();
  await page.getByTestId("logout-btn").click();
};

const createBlog = async (page, newBlog = blog) => {
  // await page.goto("http://localhost:8080/blogs");
  await page.getByTestId("blogs-link").click();
  await page.getByRole("button", { name: "create" }).click();
  await page.getByLabel("title").fill(newBlog.title);
  await page.getByLabel("author").fill(newBlog.author);
  await page.getByLabel("url").fill(newBlog.url);
  await page.getByRole("button", { name: "create" }).click();
};

const deleteBlog = async (page) => {
  // await page.getByText("view").click();
  await page.getByText("remove").click();
  page.on("dialog", (dialog) => dialog.accept());
  await page.getByText("remove").click();
};

module.exports = { login, logout, createBlog, deleteBlog, user, user2, blog };
