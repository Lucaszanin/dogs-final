import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { useEffect } from "react";
import { GET_STATS } from "../../api";
import useFetch from "../../Hooks/useFetch";
import { Error } from "../Helper/Error";
import Head from "../Helper/Head";
import Loading from "../Helper/Loading";
const UserStatsGraphs = lazy(() => import("./UserStatsGraphs"));

function UserStats() {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }

    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  else return null;
}

export default UserStats;
