import React from "react";
import Card from "../Card";
import Icon from "../Icons/Icon";
import SingleProduct from "../SingleProduct";
import Ranking from "../Ranking";
import Stats from "../Stats";

import styles from "./Dashboard.module.css";
import airPodsImg from "../../assets/airpods.jpg";
import iMac from "../../assets/imac.jpg";

import mostProfitableGoods from "./../../data/profitableSections.json";
import profitableCategory from "./../../data/profitableCategories.json";
import topSellingProduct from "./../../data/topSellingProducts.json";
import topViewedProducts from "./../../data/topViewedProducts.json";

const Dashboard = () => {
  return (
    <div>
      <header className="d-flex align-items-center p-4">
        <Icon icon="dashboard" width={22} />
        <h5 className="mb-0 ml-2">Dashboard</h5>
      </header>
      <div className={styles.grid}>
        <div className={styles.section}>
          <Card headline="Best Selling Product">
            <SingleProduct
              imgSrc={airPodsImg}
              imgAlt="AirPods Pro"
              amount="12.545"
              percentage="3.54"
              icon="usd"
              isUpTrend
            />
          </Card>
        </div>
        <div className={styles.section2}>
          <Card headline={"Most Viewed Product"}>
            <SingleProduct
              imgSrc={iMac}
              imgAlt="Apple Pro Display"
              amount="8.357"
              percentage="1.23"
              icon="eye"
            />
          </Card>
        </div>
        <div className={styles.section3}>
          <Card headline={"Most Profitable Sections"}>
            <Ranking data={mostProfitableGoods} />
          </Card>
        </div>
        <div className={styles.section4}>
          <Card headline={"Most profitable Categories"}>
            <Ranking data={profitableCategory} />
          </Card>
        </div>
        <div className={styles.section5}>
          <Card headline={"Top Selling Products"}>
            <Ranking data={topSellingProduct} />
          </Card>
        </div>
        <div className={styles.section6}>
          <Card headline={"Most Viewed Products"}>
            <Ranking data={topViewedProducts} />
          </Card>
        </div>
        <div className={styles.section7}>
          <Card headline={"General Statistic"} flexColumn>
            <Stats />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
