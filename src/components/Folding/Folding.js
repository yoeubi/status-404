import React, { Component } from "react";
import styles from "./Folding.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as Up } from "../../svg/chevron-up.svg";

const cx = classNames.bind(styles);

class Folding extends Component {
  state = {
    folding: false
  };
  handleFolding = () => {
    this.setState({
      folding: !this.state.folding
    });
  };
  render() {
    const { title, content } = this.props;
    const { folding } = this.state;
    return (
      <div className={cx("folding")}>
        <p className={cx("title")} onClick={this.handleFolding}>
          {title}
          <Up
            className={cx({ show: folding })}
            style={{
              fill: "#888",
              position: "absolute",
              top: "50%",
              right: "2rem",
              transform: `scale(1.5) translateY(-30%) ${
                folding ? "rotate(-180deg)" : "rotate(0deg)"
              }`
            }}
          />
        </p>
        <div className={cx("content", { show: folding })}>
          <p>{content}</p>
        </div>
      </div>
    );
  }
}
Folding.defaultProps = {
  title: "타이틀",
  content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, magnam doloremque et provident dolorum, saepe expedita hic, nesciunt deserunt praesentium ullam. Animi, deserunt eaque quasi corporis iusto vitae excepturi expedita?
    Velit eveniet ad accusantium mollitia aliquam repudiandae minus! Tempore aperiam esse reiciendis id exercitationem voluptatibus, eligendi molestias cumque quasi quod, veritatis, in fugit praesentium incidunt. Quibusdam vero quod id quo.
    Animi, possimus quae dolor accusamus ad magnam? Aliquid, quibusdam? Et esse voluptatem aspernatur? Eos molestiae cumque tempora possimus dicta accusamus doloremque rerum esse dolor quos. Eveniet dolorum corrupti quisquam eos!
    Commodi facere ipsa mollitia eum, amet voluptatem harum natus beatae temporibus, quos alias soluta vitae. Voluptatem enim, ipsam cum quasi sit, optio cupiditate explicabo exercitationem, assumenda maxime reprehenderit eveniet quis!
    Maxime minima quod fugit sunt! Vel qui porro deleniti eius omnis! Molestiae labore esse, illo facere sapiente exercitationem cum animi voluptatem assumenda velit harum numquam voluptates praesentium adipisci culpa totam!
    Aliquam asperiores repellat quasi, dolorum non recusandae magnam minus sequi natus ipsum amet repudiandae illum ab nihil cum nesciunt deserunt ea rerum facere tenetur laudantium harum veritatis qui perspiciatis? Quas?
    Non hic eum totam placeat reiciendis dicta quos dolore tempore corrupti, temporibus ad iusto nemo tempora dolores esse quae modi laudantium atque voluptatum? Facere, nostrum! Perferendis id similique repellendus consectetur.
    Cupiditate, cumque rem. Voluptates vitae consectetur hic quae impedit nostrum optio veniam dolorum? Eligendi necessitatibus qui odio similique blanditiis commodi sint eos, labore atque placeat debitis nesciunt eum quam quo.
    Ipsum obcaecati perferendis error voluptatem deleniti velit, porro magni quos sit, molestiae veniam. Delectus similique molestiae odio, corrupti repellat ex tempora libero commodi quae quisquam tempore voluptate. Officiis, sunt quidem!
    Sit, sint pariatur voluptatem officiis aliquam nihil qui porro libero inventore ad cum excepturi non quaerat. Provident, velit sunt! Corrupti, ipsum velit ab assumenda aliquam cupiditate. Dolore tempora inventore blanditiis.
    Consequatur, distinctio officiis. Autem vero earum maxime architecto quo dolore odio recusandae voluptatibus neque dolor, voluptate iusto dolorem exercitationem quasi corporis nobis porro magni aliquid ipsam esse? Assumenda, laborum dolorem?
    Recusandae nobis at quis corporis sapiente reprehenderit excepturi dolorem assumenda odit accusamus rerum voluptas magnam exercitationem, aut doloremque explicabo repudiandae voluptatibus. Eveniet obcaecati culpa laboriosam accusantium quasi, asperiores ea ex.
    Maiores fuga, labore aperiam unde eveniet maxime, a at, rerum ea numquam laudantium hic earum sequi mollitia enim vero tenetur et reiciendis. Velit iusto culpa ea id soluta labore optio.
    Saepe ipsum dicta aspernatur necessitatibus atque cum corrupti voluptate, quo quasi repudiandae. Illum rerum excepturi obcaecati laboriosam voluptatem impedit esse, reiciendis libero nisi placeat voluptates hic? Fuga fugit ad veniam!
    Quisquam, et impedit, expedita ullam sunt a ducimus aperiam veritatis ipsa, ab natus error at odio quas deleniti sint possimus sequi! Quisquam minima placeat itaque, alias repudiandae voluptatibus totam pariatur.
    Ad doloribus quisquam amet esse, veritatis iusto veniam temporibus et, accusantium praesentium quibusdam tempora dignissimos nemo recusandae? Unde qui rerum repellat eaque, ullam modi, nihil, explicabo saepe eligendi earum soluta!
    Provident reprehenderit nesciunt porro, magni quis cumque, cupiditate modi magnam quos necessitatibus inventore incidunt ipsum, ab earum quaerat minima eligendi officiis consequatur deserunt maiores quia. Enim repellat tempore repellendus voluptatum.
    Nihil expedita reprehenderit, esse laboriosam quibusdam itaque animi eveniet consequatur molestias aperiam cum nulla impedit soluta. Iure voluptates dolore iusto amet ab esse ducimus assumenda cumque ipsa minus, provident nemo.
    Quod ab, ea mollitia esse sed, accusamus cumque harum illum nostrum quam ipsam inventore error ipsum nulla velit unde vitae consequuntur animi debitis in fugit dolores, dolor culpa vero. Hic.
    Molestias natus sit sed possimus cupiditate omnis. Reprehenderit quisquam est quidem distinctio hic deserunt nesciunt, magnam rerum iure quos odit doloremque debitis voluptate? Illum labore quibusdam iusto in ipsum praesentium?
    Corrupti porro iste a voluptates cum eveniet autem accusantium quibusdam blanditiis animi, quaerat corporis atque, dolore, optio veritatis sunt amet? Explicabo tenetur, nam aperiam iure nihil consectetur quaerat iusto impedit.
    Enim est, aliquam mollitia perferendis dolor placeat veniam delectus sapiente quisquam. Quibusdam rem illo maiores unde, iure in eum, commodi ad dicta alias nobis molestias nam tempore magni quos ipsa.
    Impedit tenetur alias voluptatem excepturi quibusdam aliquid, sit neque, accusamus fugiat dolorem vitae, eligendi explicabo. Incidunt, quibusdam. Earum sapiente, ex ratione dicta provident cum, explicabo totam quidem maiores temporibus repellendus!
    Assumenda labore fugit quidem eos quisquam deserunt a vitae magnam neque dolorum officiis sed fuga est enim modi molestias at eligendi, cum nobis voluptatum. Iste maxime accusamus non omnis perspiciatis.
    Consequuntur quas nulla aut dolores eius debitis delectus consequatur ad in doloremque cum, magni et possimus doloribus quibusdam quam iste ex incidunt nesciunt eos eveniet neque ducimus facilis. Iusto, delectus?
    Unde at iure ducimus maxime eveniet, maiores reiciendis asperiores impedit aut dolorem expedita quos voluptate minima velit earum modi reprehenderit numquam error id libero optio alias obcaecati iste quod. Velit.
    Adipisci exercitationem corrupti necessitatibus ab, voluptatum itaque officia cupiditate, aperiam dignissimos sit molestias obcaecati, modi velit doloribus ad dolorem quis voluptate quae sint? Voluptate facilis sed excepturi id, eum ex.
    Error animi illum molestiae debitis maxime aliquam mollitia eius saepe exercitationem vero repellendus voluptatum quaerat reprehenderit, eligendi expedita eos natus voluptatibus quo labore numquam sit iusto nisi? Id, accusamus? Rerum.
    Ipsa repudiandae, eum soluta beatae cupiditate, vero atque tempore est nemo sit repellat molestiae nobis repellendus, dolore consectetur voluptatibus tenetur illo corrupti vel fugiat laborum deleniti. A autem numquam ratione.
    Rerum corrupti earum veritatis aperiam autem eligendi quas, iste nostrum voluptatem distinctio numquam id modi ad! Officiis soluta libero exercitationem totam, labore quo! Dolorem nemo recusandae nulla cupiditate minus laborum.
    Dolores officiis saepe quas, asperiores aspernatur iste eaque autem necessitatibus tempore libero blanditiis. Natus cum eum, voluptates placeat quas adipisci vel vitae temporibus ex possimus exercitationem at autem perferendis nesciunt?
    Velit hic eligendi unde quos est at facilis culpa adipisci, commodi doloribus. Tempora, dignissimos aliquam, doloribus ut fuga natus eum nemo rem soluta deserunt expedita atque ipsam maiores accusamus tenetur?
    Repellat corrupti praesentium rem aliquid itaque maxime aperiam fugiat quam. Inventore, dolorum! Ad architecto soluta culpa eligendi porro vero tenetur adipisci sed rerum voluptatem, repudiandae doloribus quo cumque, expedita reprehenderit!
    Quisquam impedit asperiores cupiditate distinctio autem vitae sapiente accusamus ipsam nostrum voluptates voluptas, consectetur assumenda earum, fuga labore commodi eaque? Velit molestiae odit eaque temporibus fugiat ut ex officia laudantium?
    Quis voluptatum qui aperiam ex minus sunt saepe quae laborum fuga, repudiandae exercitationem. Molestias expedita alias sapiente error magnam iusto reiciendis quam provident amet? Ab illum odio reiciendis modi quos?
    Labore vel repellendus quibusdam illo ratione accusamus asperiores at maiores rerum? Delectus fuga dicta facere, aliquid iste fugiat qui praesentium animi. Odio aliquid sunt veritatis natus illo, iure reiciendis molestias.
    Et non nulla, consequuntur nam aspernatur ipsa libero quia explicabo, vel voluptatibus repellendus ratione sit voluptas nobis corrupti suscipit? Asperiores praesentium impedit pariatur cumque iste neque autem expedita recusandae? Nulla?
    Ullam, iure, earum eaque velit blanditiis, tempora fuga facilis nesciunt magni voluptas veniam repudiandae temporibus consectetur voluptatum minima vero hic eos ea. Tempora quos nesciunt ipsam doloremque, cupiditate repellendus animi!
    Odit, omnis. Doloribus, saepe? Possimus error natus porro. Voluptatem consequuntur dignissimos vero ut, quia cupiditate recusandae quis architecto vel odio repudiandae. Ullam fuga earum facilis beatae iusto at impedit nemo.
    Recusandae odio iusto possimus, animi alias eaque architecto dignissimos cupiditate tempore debitis nihil, illum ab laudantium maxime, placeat beatae rerum natus repellendus sunt. Esse quas temporibus iusto voluptates culpa laudantium?
    Quis a, ullam adipisci corrupti repellat quae, earum ipsa laudantium nesciunt odit eligendi deserunt exercitationem alias similique! Repudiandae odit, reiciendis magni similique possimus magnam, nobis perspiciatis aspernatur voluptates vel obcaecati.
    Dolorem laborum, officia fugit enim in eum alias expedita dolorum similique accusantium necessitatibus, aspernatur id ut voluptate tempore at animi labore sequi voluptatum! Qui, amet provident. Ullam ex inventore cum.
    Autem voluptatum mollitia cum dolor beatae, totam natus. Nisi quae dicta nobis qui veritatis exercitationem ea vel voluptatibus iste magnam similique odit, nesciunt expedita, aspernatur ipsum laudantium harum? Temporibus, quidem?
    Voluptate accusamus, aperiam quisquam possimus ipsam maxime velit laudantium sed earum eaque adipisci dolorem temporibus libero nobis ea sint perspiciatis assumenda blanditiis? A possimus atque iusto pariatur animi eaque ipsam.
    Cumque, magni consectetur perferendis odio maxime soluta odit eum non ex blanditiis ut architecto earum quas consequuntur animi error neque quos voluptatum repellat. Et dignissimos enim accusamus tenetur maxime mollitia!
    Minus aperiam voluptates soluta perferendis incidunt, in quae laboriosam aliquid dicta corrupti libero! Harum omnis sed rerum laboriosam natus? Dolorum corporis mollitia omnis ut saepe, nam officia non ipsum? Reiciendis.
    Neque quisquam delectus dolorum eaque quibusdam eum commodi quasi perspiciatis quaerat quam dignissimos a, doloremque laudantium eius! Dignissimos debitis, laudantium magnam vero delectus, ipsa veniam in adipisci officiis soluta asperiores!
    Ducimus cumque voluptatibus nisi quae a reiciendis officia optio, mollitia autem sit minus suscipit ipsum dolore ea quo. Ullam quidem quam eos facilis, veritatis praesentium ut eum facere placeat consequatur.
    Aspernatur quae ut similique praesentium, corrupti recusandae, sit, libero fugit placeat perspiciatis iusto! Necessitatibus eos hic repellendus quod sapiente, laudantium illo provident veniam, magnam ab vitae totam omnis soluta debitis?
    Iste enim eveniet maxime iure earum culpa nostrum reiciendis porro quo qui doloribus voluptatibus temporibus dolores, blanditiis tenetur. Eum dolor nihil dolorum quia dolorem perferendis ab blanditiis saepe nesciunt harum.`
};

export default Folding;
