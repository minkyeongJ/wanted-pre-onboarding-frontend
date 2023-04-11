import routerConst from "../../../helper/routerConst";

const Home = () => {
  return (
    <>
      <main>
        <section>
          <iframe
            src="https://giphy.com/embed/KCjV5CBW128LzsgH1Y"
            width="400"
            height="400"
            className="my-0 mx-auto pointer-events-none"
            allowFullScreen
          ></iframe>
        </section>
        <section className="mt-10">
          <div className="max-w-full text-center">
            <a
              href={routerConst.TODO}
              className="bg-transparent hover:bg-pink-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded mx-auto"
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
