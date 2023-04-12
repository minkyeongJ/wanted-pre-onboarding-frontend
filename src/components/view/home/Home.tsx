import routerConst from "../../../helper/routerConst";

const Home = () => {
  return (
    <>
      <main className="absolute h-[calc(100vh-80px)] w-screen bg-home-background-image-mew table bg-auto bg-no-repeat md:bg-top bg-home-bg-color">
        <section className="mt-10 table-cell align-middle">
          <div className="max-w-full text-center">
            <a
              href={routerConst.TODO}
              className="bg-transparent bg-violet-100 bg-opacity-50 hover:opacity-100 hover:bg-violet-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded mx-auto text-2xl"
            >
              GO TODO
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
