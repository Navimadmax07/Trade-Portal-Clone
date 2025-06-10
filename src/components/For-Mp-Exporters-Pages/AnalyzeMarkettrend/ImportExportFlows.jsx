import React, { useState, useEffect } from "react";
import AnalyzeMenu from "../AnalyzeMenu";
import { useNavigate } from "react-router-dom";

const ImportExportFlows = () => {
  const [hscode, setHscode] = useState("exampleHscode"); // Replace with actual data
  const [fromCountry, setFromCountry] = useState("exampleFromCountry"); // Replace with actual data
  const [toCountry, setToCountry] = useState("exampleToCountry"); // Replace with actual data
  const [error, setError] = useState(null);
  const [data, setData] = useState([]); // Added state for table data

  useEffect(() => {
    const hscodeElement = document.querySelector("#hscode");
    const fromCountryElement = document.querySelector("#fromcountry");
    const toCountryElement = document.querySelector("#tocountry");

    if (hscodeElement) {
      Array.from(hscodeElement.options).forEach((option) => {
        if (option.value === hscode) {
          option.selected = true;
        }
      });
    }

    if (fromCountryElement) {
      Array.from(fromCountryElement.options).forEach((option) => {
        if (option.value === fromCountry) {
          option.selected = true;
        }
      });
    }

    if (toCountryElement) {
      Array.from(toCountryElement.options).forEach((option) => {
        if (option.value === toCountry) {
          option.selected = true;
        }
      });
    }
  }, [hscode, fromCountry, toCountry]);

  // Load data from sessionStorage if needed
  useEffect(() => {
    const storedHscode = sessionStorage.getItem("hscode");
    const storedFromCountry = sessionStorage.getItem("from_country");
    const storedToCountry = sessionStorage.getItem("to_country");

    if (storedHscode) setHscode(storedHscode);
    if (storedFromCountry) setFromCountry(storedFromCountry);
    if (storedToCountry) setToCountry(storedToCountry);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="container-fluid" id="innerpage">
      <div className="row" id="dashboard">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3" id="sidemenu">
              <a
                
                onClick={() => navigate("/analyzeMarketTrend")}
                className="btn btn-default"
              >
                <i
                  className="fa fa-chevron-circle-left fa-2x"
                  aria-hidden="true"
                ></i>
              </a>
              <AnalyzeMenu />
            </div>
            <div className="col-md-9">
              <div className="card">
                <div className="card-header pt-2">
                  <h3>Import Export Flows</h3>
                </div>
                <div className="card-body">
                  <div className="card">
                    <div className="card-body">
                      <form
                        action="<?= base_url(); ?>Client/ImportExportFlows/getTradeDetails"
                        method="post"
                      >
                        <div className="row">
                          <div className="form-group col-md-4">
                            <select
                              className="form-control"
                              name="hs_code"
                              id="hscode"
                            >
                              <option value="">Select HS Code</option>
                              <option value="01" title="01 - Live animals">
                                01 - Live animals
                              </option>
                              <option
                                value="02"
                                title="02 - Meat and edible meat offal"
                              >
                                02 - Meat and edible meat offal
                              </option>
                              <option
                                value="03"
                                title="03 - Fish and crustaceans, molluscs and other aquatic invertebrates"
                              >
                                03 - Fish and crustaceans, molluscs and other
                                aquatic invertebrates
                              </option>
                              <option
                                value="04"
                                title="04 - Dairy produce; birds' eggs; natural honey; edible products of animal origin, not elsewhere specified or included"
                              >
                                04 - Dairy produce; birds' eggs; natural honey;
                                edible products of animal origin, not elsewhere
                                ...
                              </option>
                              <option
                                value="05"
                                title="05 - Products of animal origin, not elsewhere specified or included"
                              >
                                05 - Products of animal origin, not elsewhere
                                specified or included
                              </option>
                              <option
                                value="06"
                                title="06 - Live trees and other plants; bulbs, roots and the like; cut flowers and ornamental foliage"
                              >
                                06 - Live trees and other plants; bulbs, roots
                                and the like; cut flowers and ornamental foliage
                              </option>
                              <option
                                value="07"
                                title="07 - Edible vegetables and certain roots and tubers"
                              >
                                07 - Edible vegetables and certain roots and
                                tubers
                              </option>
                              <option
                                value="08"
                                title="08 - Edible fruit and nuts; peel of citrus fruit or melons"
                              >
                                08 - Edible fruit and nuts; peel of citrus fruit
                                or melons
                              </option>
                              <option
                                value="09"
                                title="09 - Coffee, tea, maté and spices"
                              >
                                09 - Coffee, tea, maté and spices
                              </option>
                              <option value="10" title="10 - Cereals">
                                10 - Cereals
                              </option>
                              <option
                                value="11"
                                title="11 - Products of the milling industry; malt; starches; inulin; wheat gluten"
                              >
                                11 - Products of the milling industry; malt;
                                starches; inulin; wheat gluten
                              </option>
                              <option
                                value="12"
                                title="12 - Oil seeds and oleaginous fruits; miscellaneous grains, seeds and fruit; industrial or medicinal plants; straw and fodder"
                              >
                                12 - Oil seeds and oleaginous fruits;
                                miscellaneous grains, seeds and fruit;
                                industrial or ...
                              </option>
                              <option
                                value="13"
                                title="13 - Lac; gums, resins and other vegetable saps and extracts"
                              >
                                13 - Lac; gums, resins and other vegetable saps
                                and extracts
                              </option>
                              <option
                                value="14"
                                title="14 - Vegetable plaiting materials; vegetable products not elsewhere specified or included"
                              >
                                14 - Vegetable plaiting materials; vegetable
                                products not elsewhere specified or included
                              </option>
                              <option
                                value="15"
                                title="15 - Animal or vegetable fats and oils and their cleavage products; prepared edible fats; animal or vegetable waxes"
                              >
                                15 - Animal or vegetable fats and oils and their
                                cleavage products; prepared edible fats; animal
                                ...
                              </option>
                              <option
                                value="16"
                                title="16 - Preparations of meat, of fish or of crustaceans, molluscs or other aquatic invertebrates"
                              >
                                16 - Preparations of meat, of fish or of
                                crustaceans, molluscs or other aquatic
                                invertebrates
                              </option>
                              <option
                                value="17"
                                title="17 - Sugars and sugar confectionery"
                              >
                                17 - Sugars and sugar confectionery
                              </option>
                              <option
                                value="18"
                                title="18 - Cocoa and cocoa preparations"
                              >
                                18 - Cocoa and cocoa preparations
                              </option>
                              <option
                                value="19"
                                title="19 - Preparations of cereals, flour, starch or milk; pastrycooks' products"
                              >
                                19 - Preparations of cereals, flour, starch or
                                milk; pastrycooks' products
                              </option>
                              <option
                                value="20"
                                title="20 - Preparations of vegetables, fruit, nuts or other parts of plants"
                              >
                                20 - Preparations of vegetables, fruit, nuts or
                                other parts of plants
                              </option>
                              <option
                                value="21"
                                title="21 - Miscellaneous edible preparations"
                              >
                                21 - Miscellaneous edible preparations
                              </option>
                              <option
                                value="22"
                                title="22 - Beverages, spirits and vinegar"
                              >
                                22 - Beverages, spirits and vinegar
                              </option>
                              <option
                                value="23"
                                title="23 - Residues and waste from the food industries; prepared animal fodder"
                              >
                                23 - Residues and waste from the food
                                industries; prepared animal fodder
                              </option>
                              <option
                                value="24"
                                title="24 - Tobacco and manufactured tobacco substitutes"
                              >
                                24 - Tobacco and manufactured tobacco
                                substitutes
                              </option>
                              <option
                                value="25"
                                title="25 - Salt; sulphur; earths and stone; plastering materials, lime and cement"
                              >
                                25 - Salt; sulphur; earths and stone; plastering
                                materials, lime and cement
                              </option>
                              <option
                                value="26"
                                title="26 - Ores, slag and ash"
                              >
                                26 - Ores, slag and ash
                              </option>
                              <option
                                value="27"
                                title="27 - Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes"
                              >
                                27 - Mineral fuels, mineral oils and products of
                                their distillation; bituminous substances; ...
                              </option>
                              <option
                                value="28"
                                title="28 - Inorganic chemicals; organic or inorganic compounds of precious metals, of rare-earth metals, of radioactive elements or of isotopes"
                              >
                                28 - Inorganic chemicals; organic or inorganic
                                compounds of precious metals, of rare-earth ...
                              </option>
                              <option value="29" title="29 - Organic chemicals">
                                29 - Organic chemicals
                              </option>
                              <option
                                value="30"
                                title="30 - Pharmaceutical products"
                              >
                                30 - Pharmaceutical products
                              </option>
                              <option value="31" title="31 - Fertilisers">
                                31 - Fertilisers
                              </option>
                              <option
                                value="32"
                                title="32 - Tanning or dyeing extracts; tannins and their derivatives; dyes, pigments and other colouring matter; paints and varnishes; putty and other mastics; inks"
                              >
                                32 - Tanning or dyeing extracts; tannins and
                                their derivatives; dyes, pigments and other
                                colouring ...
                              </option>
                              <option
                                value="33"
                                title="33 - Essential oils and resinoids; perfumery, cosmetic or toilet preparations"
                              >
                                33 - Essential oils and resinoids; perfumery,
                                cosmetic or toilet preparations
                              </option>
                              <option
                                value="34"
                                title="34 - Soap, organic surface-active agents, washing preparations, lubricating preparations, artificial waxes, prepared waxes, polishing or scouring preparations, candles and similar articles, modelling pastes, ‘dental waxes’ and dental preparations with a basis of plaster"
                              >
                                34 - Soap, organic surface-active agents,
                                washing preparations, lubricating preparations,
                                artificial ...
                              </option>
                              <option
                                value="35"
                                title="35 - Albuminoidal substances; modified starches; glues; enzymes"
                              >
                                35 - Albuminoidal substances; modified starches;
                                glues; enzymes
                              </option>
                              <option
                                value="36"
                                title="36 - Explosives; pyrotechnic products; matches; pyrophoric alloys; certain combustible preparations"
                              >
                                36 - Explosives; pyrotechnic products; matches;
                                pyrophoric alloys; certain combustible
                                preparations
                              </option>
                              <option
                                value="37"
                                title="37 - Photographic or cinematographic goods"
                              >
                                37 - Photographic or cinematographic goods
                              </option>
                              <option
                                value="38"
                                title="38 - Miscellaneous chemical products"
                              >
                                38 - Miscellaneous chemical products
                              </option>
                              <option
                                value="39"
                                title="39 - Plastics and articles thereof"
                              >
                                39 - Plastics and articles thereof
                              </option>
                              <option
                                value="40"
                                title="40 - Rubber and articles thereof"
                              >
                                40 - Rubber and articles thereof
                              </option>
                              <option
                                value="41"
                                title="41 - Raw hides and skins (other than furskins) and leather"
                              >
                                41 - Raw hides and skins (other than furskins)
                                and leather
                              </option>
                              <option
                                value="42"
                                title="42 - Articles of leather; saddlery and harness; travel goods, handbags and similar containers; articles of animal gut (other than silkworm gut)"
                              >
                                42 - Articles of leather; saddlery and harness;
                                travel goods, handbags and similar containers;
                                ...
                              </option>
                              <option
                                value="43"
                                title="43 - Furskins and artificial fur; manufactures thereof"
                              >
                                43 - Furskins and artificial fur; manufactures
                                thereof
                              </option>
                              <option
                                value="44"
                                title="44 - Wood and articles of wood; wood charcoal"
                              >
                                44 - Wood and articles of wood; wood charcoal
                              </option>
                              <option
                                value="45"
                                title="45 - Cork and articles of cork"
                              >
                                45 - Cork and articles of cork
                              </option>
                              <option
                                value="46"
                                title="46 - Manufactures of straw, of esparto or of other plaiting materials; basketware and wickerwork"
                              >
                                46 - Manufactures of straw, of esparto or of
                                other plaiting materials; basketware and
                                wickerwork
                              </option>
                              <option
                                value="47"
                                title="47 - Pulp of wood or of other fibrous cellulosic material; recovered (waste and scrap) paper or paperboard"
                              >
                                47 - Pulp of wood or of other fibrous cellulosic
                                material; recovered (waste and scrap) paper ...
                              </option>
                              <option
                                value="48"
                                title="48 - Paper and paperboard; articles of paper pulp, of paper or of paperboard"
                              >
                                48 - Paper and paperboard; articles of paper
                                pulp, of paper or of paperboard
                              </option>
                              <option
                                value="49"
                                title="49 - Printed books, newspapers, pictures and other products of the printing industry; manuscripts, typescripts and plans"
                              >
                                49 - Printed books, newspapers, pictures and
                                other products of the printing industry;
                                manuscripts, ...
                              </option>
                              <option value="50" title="50 - Silk">
                                50 - Silk
                              </option>
                              <option
                                value="51"
                                title="51 - Wool, fine or coarse animal hair; horsehair yarn and woven fabric"
                              >
                                51 - Wool, fine or coarse animal hair; horsehair
                                yarn and woven fabric
                              </option>
                              <option value="52" title="52 - Cotton">
                                52 - Cotton
                              </option>
                              <option
                                value="53"
                                title="53 - Other vegetable textile fibres; paper yarn and woven fabrics of paper yarn"
                              >
                                53 - Other vegetable textile fibres; paper yarn
                                and woven fabrics of paper yarn
                              </option>
                              <option
                                value="54"
                                title="54 - Man-made filaments; strip and the like of man-made textile materials"
                              >
                                54 - Man-made filaments; strip and the like of
                                man-made textile materials
                              </option>
                              <option
                                value="55"
                                title="55 - Man-made staple fibres"
                              >
                                55 - Man-made staple fibres
                              </option>
                              <option
                                value="56"
                                title="56 - Wadding, felt and nonwovens; special yarns; twine, cordage, ropes and cables and articles thereof"
                              >
                                56 - Wadding, felt and nonwovens; special yarns;
                                twine, cordage, ropes and cables and articles
                                ...
                              </option>
                              <option
                                value="57"
                                title="57 - Carpets and other textile floor coverings"
                              >
                                57 - Carpets and other textile floor coverings
                              </option>
                              <option
                                value="58"
                                title="58 - Special woven fabrics; tufted textile fabrics; lace; tapestries; trimmings; embroidery"
                              >
                                58 - Special woven fabrics; tufted textile
                                fabrics; lace; tapestries; trimmings; embroidery
                              </option>
                              <option
                                value="59"
                                title="59 - Impregnated, coated, covered or laminated textile fabrics; textile articles of a kind suitable for industrial use"
                              >
                                59 - Impregnated, coated, covered or laminated
                                textile fabrics; textile articles of a kind ...
                              </option>
                              <option
                                value="60"
                                title="60 - Knitted or crocheted fabrics"
                              >
                                60 - Knitted or crocheted fabrics
                              </option>
                              <option
                                value="61"
                                title="61 - Articles of apparel and clothing accessories, knitted or crocheted"
                              >
                                61 - Articles of apparel and clothing
                                accessories, knitted or crocheted
                              </option>
                              <option
                                value="62"
                                title="62 - Articles of apparel and clothing accessories, not knitted or crocheted"
                              >
                                62 - Articles of apparel and clothing
                                accessories, not knitted or crocheted
                              </option>
                              <option
                                value="63"
                                title="63 - Other made-up textile articles; sets; worn clothing and worn textile articles; rags"
                              >
                                63 - Other made-up textile articles; sets; worn
                                clothing and worn textile articles; rags
                              </option>
                              <option
                                value="64"
                                title="64 - Footwear, gaiters and the like; parts of such articles"
                              >
                                64 - Footwear, gaiters and the like; parts of
                                such articles
                              </option>
                              <option
                                value="65"
                                title="65 - Headgear and parts thereof"
                              >
                                65 - Headgear and parts thereof
                              </option>
                              <option
                                value="66"
                                title="66 - Umbrellas, sun umbrellas, walking sticks, seat-sticks, whips, riding-crops and parts thereof"
                              >
                                66 - Umbrellas, sun umbrellas, walking sticks,
                                seat-sticks, whips, riding-crops and parts
                                thereof
                              </option>
                              <option
                                value="67"
                                title="67 - Prepared feathers and down and articles made of feathers or of down; artificial flowers; articles of human hair"
                              >
                                67 - Prepared feathers and down and articles
                                made of feathers or of down; artificial flowers;
                                ...
                              </option>
                              <option
                                value="68"
                                title="68 - Articles of stone, plaster, cement, asbestos, mica or similar materials"
                              >
                                68 - Articles of stone, plaster, cement,
                                asbestos, mica or similar materials
                              </option>
                              <option value="69" title="69 - Ceramic products">
                                69 - Ceramic products
                              </option>
                              <option
                                value="70"
                                title="70 - Glass and glassware"
                              >
                                70 - Glass and glassware
                              </option>
                              <option
                                value="71"
                                title="71 - Natural or cultured pearls, precious or semi-precious stones, precious metals, metals clad with precious metal, and articles thereof; imitation jewellery; coin"
                              >
                                71 - Natural or cultured pearls, precious or
                                semi-precious stones, precious metals, metals
                                ...
                              </option>
                              <option
                                value="7101"
                                title="... 7101 - Pearls, natural or cultured, whether or not worked or graded, but not strung, mounted or set, pearls, natural or cultured, temporarily strung for convenience of transport (excluding imitations of natural pearls and mother-of-pearl)"
                              >
                                ... 7101 - Pearls, natural or cultured, whether
                                or not worked or graded, but not strung, mounted
                                ...
                              </option>
                              <option
                                value="7102"
                                title="... 7102 - Diamonds, whether or not worked, but not mounted or set (excluding unmounted stones for pick-up styluses, worked stones, suitable for use as parts of meters, measuring instruments or other articles of chapter 90)"
                              >
                                ... 7102 - Diamonds, whether or not worked, but
                                not mounted or set (excluding unmounted stones
                                ...
                              </option>
                              <option
                                value="7103"
                                title="... 7103 - Precious stones and semi-precious stones, whether or not worked or graded, but not strung, mounted or set, ungraded precious stones and semi-precious stones, temporarily strung for convenience of transport (excluding diamonds and imitation precious stones and semi-precious stones)"
                              >
                                ... 7103 - Precious stones and semi-precious
                                stones, whether or not worked or graded, but not
                                strung, ...
                              </option>
                              <option
                                value="7104"
                                title="... 7104 - Precious and semi-precious stones, synthetic or reconstructed, whether or not worked or graded but not strung, mounted or set; ungraded synthetic or reconstructed precious or semi-precious stones, temporarily strung for convenience of transport"
                              >
                                ... 7104 - Precious and semi-precious stones,
                                synthetic or reconstructed, whether or not
                                worked ...
                              </option>
                              <option
                                value="7105"
                                title="... 7105 - Dust and powder of natural or synthetic precious or semi-precious stones"
                              >
                                ... 7105 - Dust and powder of natural or
                                synthetic precious or semi-precious stones
                              </option>
                              <option
                                value="7106"
                                title="... 7106 - Silver, incl. silver plated with gold or platinum, unwrought or in semi-manufactured forms, or in powder form"
                              >
                                ... 7106 - Silver, incl. silver plated with gold
                                or platinum, unwrought or in semi-manufactured
                                ...
                              </option>
                              <option
                                value="7107"
                                title="... 7107 - Base metals clad with silver, not further worked than semi-manufactured"
                              >
                                ... 7107 - Base metals clad with silver, not
                                further worked than semi-manufactured
                              </option>
                              <option
                                value="7108"
                                title="... 7108 - Gold, incl. gold plated with platinum, unwrought or not further worked than semi-manufactured or in powder form"
                              >
                                ... 7108 - Gold, incl. gold plated with
                                platinum, unwrought or not further worked than
                                semi-manufactured ...
                              </option>
                              <option
                                value="7109"
                                title="... 7109 - Base metals or silver, clad with gold, not further worked than semi-manufactured"
                              >
                                ... 7109 - Base metals or silver, clad with
                                gold, not further worked than semi-manufactured
                              </option>
                              <option
                                value="7110"
                                title="... 7110 - Platinum, incl. palladium, rhodium, iridium, osmium and ruthenium, unwrought or in semi-manufactured forms, or in powder form"
                              >
                                ... 7110 - Platinum, incl. palladium, rhodium,
                                iridium, osmium and ruthenium, unwrought or in
                                semi-manufactured ...
                              </option>
                              <option
                                value="7111"
                                title="... 7111 - Base metals, silver or gold, clad with platinum, not further worked than semi-manufactured"
                              >
                                ... 7111 - Base metals, silver or gold, clad
                                with platinum, not further worked than
                                semi-manufactured
                              </option>
                              <option
                                value="7112"
                                title="... 7112 - Waste and scrap of precious metal or of metal clad with precious metal; other waste and scrap containing precious metal or precious-metal compounds, of a kind used principally for the recovery of precious metal (excluding waste and scrap melted down into unworked blocks, ingots, or similar forms)"
                              >
                                ... 7112 - Waste and scrap of precious metal or
                                of metal clad with precious metal; other waste
                                ...
                              </option>
                              <option
                                value="7113"
                                title="... 7113 - Articles of jewellery and parts thereof, of precious metal or of metal clad with precious metal (excluding articles > 100 years old)"
                              >
                                ... 7113 - Articles of jewellery and parts
                                thereof, of precious metal or of metal clad with
                                precious ...
                              </option>
                              <option
                                value="7114"
                                title="... 7114 - Articles of goldsmiths' or silversmiths' wares and parts thereof, of precious metal or of metal clad with precious metal (excluding jewellery, clocks, watches and parts thereof, musical instruments, arms, perfume atomizers and their atomizing heads, original sculptures, collectors' pieces and antiques)"
                              >
                                ... 7114 - Articles of goldsmiths' or
                                silversmiths' wares and parts thereof, of
                                precious metal ...
                              </option>
                              <option
                                value="7115"
                                title="... 7115 - Articles of precious metal or of metal clad with precious metal, n.e.s."
                              >
                                ... 7115 - Articles of precious metal or of
                                metal clad with precious metal, n.e.s.
                              </option>
                              <option
                                value="7116"
                                title='... 7116 - Articles of natural or cultured pearls, precious or semi-precious stones "natural, synthetic or reconstructed", n.e.s.'
                              >
                                ... 7116 - Articles of natural or cultured
                                pearls, precious or semi-precious stones
                                "natural, synthetic ...
                              </option>
                              <option
                                value="7117"
                                title="... 7117 - Imitation jewellery"
                              >
                                ... 7117 - Imitation jewellery
                              </option>
                              <option
                                value="7118"
                                title="... 7118 - Coin, incl. legal tender (excluding medals, jewellery made from coins, collectors' items of numismatic value, waste and scrap)"
                              >
                                ... 7118 - Coin, incl. legal tender (excluding
                                medals, jewellery made from coins, collectors'
                                items ...
                              </option>
                              <option value="72" title="72 - Iron and steel">
                                72 - Iron and steel
                              </option>
                              <option
                                value="73"
                                title="73 - Articles of iron or steel"
                              >
                                73 - Articles of iron or steel
                              </option>
                              <option
                                value="74"
                                title="74 - Copper and articles thereof"
                              >
                                74 - Copper and articles thereof
                              </option>
                              <option
                                value="75"
                                title="75 - Nickel and articles thereof"
                              >
                                75 - Nickel and articles thereof
                              </option>
                              <option
                                value="76"
                                title="76 - Aluminium and articles thereof"
                              >
                                76 - Aluminium and articles thereof
                              </option>
                              <option
                                value="78"
                                title="78 - Lead and articles thereof"
                              >
                                78 - Lead and articles thereof
                              </option>
                              <option
                                value="79"
                                title="79 - Zinc and articles thereof"
                              >
                                79 - Zinc and articles thereof
                              </option>
                              <option
                                value="80"
                                title="80 - Tin and articles thereof"
                              >
                                80 - Tin and articles thereof
                              </option>
                              <option
                                value="81"
                                title="81 - Other base metals; cermets; articles thereof"
                              >
                                81 - Other base metals; cermets; articles
                                thereof
                              </option>
                              <option
                                value="82"
                                title="82 - Tools, implements, cutlery, spoons and forks, of base metal; parts thereof of base metal"
                              >
                                82 - Tools, implements, cutlery, spoons and
                                forks, of base metal; parts thereof of base
                                metal
                              </option>
                              <option
                                value="83"
                                title="83 - Miscellaneous articles of base metal"
                              >
                                83 - Miscellaneous articles of base metal
                              </option>
                              <option
                                value="84"
                                title="84 - Machinery, mechanical appliances, nuclear reactors, boilers; parts thereof"
                              >
                                84 - Machinery, mechanical appliances, nuclear
                                reactors, boilers; parts thereof
                              </option>
                              <option
                                value="85"
                                title="85 - Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles"
                              >
                                85 - Electrical machinery and equipment and
                                parts thereof; sound recorders and reproducers,
                                ...
                              </option>
                              <option
                                value="86"
                                title="86 - Railway or tramway locomotives, rolling stock and parts thereof; railway or tramway track fixtures and fittings and parts thereof; mechanical (including electromechanical) traffic signalling equipment of all kinds"
                              >
                                86 - Railway or tramway locomotives, rolling
                                stock and parts thereof; railway or tramway
                                track ...
                              </option>
                              <option
                                value="87"
                                title="87 - Vehicles other than railway or tramway rolling stock, and parts and accessories thereof"
                              >
                                87 - Vehicles other than railway or tramway
                                rolling stock, and parts and accessories thereof
                              </option>
                              <option
                                value="88"
                                title="88 - Aircraft, spacecraft, and parts thereof"
                              >
                                88 - Aircraft, spacecraft, and parts thereof
                              </option>
                              <option
                                value="89"
                                title="89 - Ships, boats and floating structures"
                              >
                                89 - Ships, boats and floating structures
                              </option>
                              <option
                                value="90"
                                title="90 - Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof"
                              >
                                90 - Optical, photographic, cinematographic,
                                measuring, checking, precision, medical or
                                surgical ...
                              </option>
                              <option
                                value="91"
                                title="91 - Clocks and watches and parts thereof"
                              >
                                91 - Clocks and watches and parts thereof
                              </option>
                              <option
                                value="92"
                                title="92 - Musical instruments; parts and accessories of such articles"
                              >
                                92 - Musical instruments; parts and accessories
                                of such articles
                              </option>
                              <option
                                value="93"
                                title="93 - Arms and ammunition; parts and accessories thereof"
                              >
                                93 - Arms and ammunition; parts and accessories
                                thereof
                              </option>
                              <option
                                value="94"
                                title="94 - Furniture; bedding, mattresses, mattress supports, cushions and similar stuffed furnishings; lamps and lighting fittings, not elsewhere specified or included; illuminated signs, illuminated nameplates and the like; prefabricated buildings"
                              >
                                94 - Furniture; bedding, mattresses, mattress
                                supports, cushions and similar stuffed
                                furnishings; ...
                              </option>
                              <option
                                value="95"
                                title="95 - Toys, games and sports requisites; parts and accessories thereof"
                              >
                                95 - Toys, games and sports requisites; parts
                                and accessories thereof
                              </option>
                              <option
                                value="96"
                                title="96 - Miscellaneous manufactured articles"
                              >
                                96 - Miscellaneous manufactured articles
                              </option>
                              <option
                                value="97"
                                title="97 - Works of art, collectors' pieces and antiques"
                              >
                                97 - Works of art, collectors' pieces and
                                antiques
                              </option>
                              <option
                                value="98"
                                title="98 - Commodities specified at chapter level only"
                              >
                                98 - Commodities specified at chapter level only
                              </option>
                              <option
                                value="99"
                                title="99 - Commodities not elsewhere specified"
                              >
                                99 - Commodities not elsewhere specified
                              </option>
                            </select>
                          </div>
                          <div className="form-group col-md-3">
                            <select
                              className="form-control"
                              name="from_country_code"
                              id="fromcountry"
                            >
                              <option value="">Select From Country</option>
                              <option value="004" title="Afghanistan">
                                Afghanistan
                              </option>
                              <option value="-2">All</option>
                              <option
                                value="577"
                                title="Africa not elsewhere specified"
                              >
                                Africa not elsewhere specified
                              </option>
                              <option value="008" title="Albania">
                                Albania
                              </option>
                              <option value="012" title="Algeria">
                                Algeria
                              </option>
                              <option
                                value="636"
                                title="America not elsewhere specified"
                              >
                                America not elsewhere specified
                              </option>
                              <option value="016" title="American Samoa">
                                American Samoa
                              </option>
                              <option value="020" title="Andorra">
                                Andorra
                              </option>
                              <option value="024" title="Angola">
                                Angola
                              </option>
                              <option value="660" title="Anguilla">
                                Anguilla
                              </option>
                              <option value="028" title="Antigua and Barbuda">
                                Antigua and Barbuda
                              </option>
                              <option value="899" title="Area Nes">
                                Area Nes
                              </option>
                              <option value="032" title="Argentina">
                                Argentina
                              </option>
                              <option value="051" title="Armenia">
                                Armenia
                              </option>
                              <option value="533" title="Aruba">
                                Aruba
                              </option>
                              <option
                                value="946"
                                title="Asia not elsewhere specified"
                              >
                                Asia not elsewhere specified
                              </option>
                              <option value="036" title="Australia">
                                Australia
                              </option>
                              <option value="040" title="Austria">
                                Austria
                              </option>
                              <option value="031" title="Azerbaijan">
                                Azerbaijan
                              </option>
                              <option value="044" title="Bahamas">
                                Bahamas
                              </option>
                              <option value="048" title="Bahrain">
                                Bahrain
                              </option>
                              <option value="050" title="Bangladesh">
                                Bangladesh
                              </option>
                              <option value="052" title="Barbados">
                                Barbados
                              </option>
                              <option value="112" title="Belarus">
                                Belarus
                              </option>
                              <option value="056" title="Belgium">
                                Belgium
                              </option>
                              <option value="084" title="Belize">
                                Belize
                              </option>
                              <option value="204" title="Benin">
                                Benin
                              </option>
                              <option value="060" title="Bermuda">
                                Bermuda
                              </option>
                              <option value="064" title="Bhutan">
                                Bhutan
                              </option>
                              <option
                                value="068"
                                title="Bolivia, Plurinational State of"
                              >
                                Bolivia, Plurinational State of
                              </option>
                              <option
                                value="535"
                                title="Bonaire, Sint Eustatius and Saba"
                              >
                                Bonaire, Sint Eustatius and Saba
                              </option>
                              <option
                                value="070"
                                title="Bosnia and Herzegovina"
                              >
                                Bosnia and Herzegovina
                              </option>
                              <option value="072" title="Botswana">
                                Botswana
                              </option>
                              <option value="074" title="Bouvet Island">
                                Bouvet Island
                              </option>
                              <option value="076" title="Brazil">
                                Brazil
                              </option>
                              <option
                                value="080"
                                title="British Antarctic Territory"
                              >
                                British Antarctic Territory
                              </option>
                              <option
                                value="086"
                                title="British Indian Ocean Territory"
                              >
                                British Indian Ocean Territory
                              </option>
                              <option
                                value="092"
                                title="British Virgin Islands"
                              >
                                British Virgin Islands
                              </option>
                              <option value="096" title="Brunei Darussalam">
                                Brunei Darussalam
                              </option>
                              <option value="100" title="Bulgaria">
                                Bulgaria
                              </option>
                              <option value="854" title="Burkina Faso">
                                Burkina Faso
                              </option>
                              <option value="108" title="Burundi">
                                Burundi
                              </option>
                              <option value="132" title="Cabo Verde">
                                Cabo Verde
                              </option>
                              <option value="116" title="Cambodia">
                                Cambodia
                              </option>
                              <option value="120" title="Cameroon">
                                Cameroon
                              </option>
                              <option value="124" title="Canada">
                                Canada
                              </option>
                              <option value="129" title="Caribbean Nes">
                                Caribbean Nes
                              </option>
                              <option value="136" title="Cayman Islands">
                                Cayman Islands
                              </option>
                              <option
                                value="471"
                                title="Centr.Amer.Com.Market (CACM) Nes"
                              >
                                Centr.Amer.Com.Market (CACM) Nes
                              </option>
                              <option
                                value="140"
                                title="Central African Republic"
                              >
                                Central African Republic
                              </option>
                              <option value="148" title="Chad">
                                Chad
                              </option>
                              <option value="152" title="Chile">
                                Chile
                              </option>
                              <option value="156" title="China">
                                China
                              </option>
                              <option value="162" title="Christmas Island">
                                Christmas Island
                              </option>
                              <option
                                value="166"
                                title="Cocos (Keeling) Islands"
                              >
                                Cocos (Keeling) Islands
                              </option>
                              <option value="170" title="Colombia">
                                Colombia
                              </option>
                              <option value="174" title="Comoros">
                                Comoros
                              </option>
                              <option value="178" title="Congo">
                                Congo
                              </option>
                              <option
                                value="180"
                                title="Congo, Democratic Republic of the"
                              >
                                Congo, Democratic Republic of the
                              </option>
                              <option value="184" title="Cook Islands">
                                Cook Islands
                              </option>
                              <option value="188" title="Costa Rica">
                                Costa Rica
                              </option>
                              <option value="384" title="Côte d'Ivoire">
                                Côte d'Ivoire
                              </option>
                              <option value="191" title="Croatia">
                                Croatia
                              </option>
                              <option value="192" title="Cuba">
                                Cuba
                              </option>
                              <option value="531" title="Curaçao">
                                Curaçao
                              </option>
                              <option value="196" title="Cyprus">
                                Cyprus
                              </option>
                              <option value="203" title="Czech Republic">
                                Czech Republic
                              </option>
                              <option value="208" title="Denmark">
                                Denmark
                              </option>
                              <option value="262" title="Djibouti">
                                Djibouti
                              </option>
                              <option value="212" title="Dominica">
                                Dominica
                              </option>
                              <option value="214" title="Dominican Republic">
                                Dominican Republic
                              </option>
                              <option
                                value="221"
                                title="East Europe not elsewhere specified"
                              >
                                East Europe not elsewhere specified
                              </option>
                              <option value="218" title="Ecuador">
                                Ecuador
                              </option>
                              <option value="818" title="Egypt">
                                Egypt
                              </option>
                              <option value="222" title="El Salvador">
                                El Salvador
                              </option>
                              <option value="226" title="Equatorial Guinea">
                                Equatorial Guinea
                              </option>
                              <option value="232" title="Eritrea">
                                Eritrea
                              </option>
                              <option value="233" title="Estonia">
                                Estonia
                              </option>
                              <option value="748" title="Eswatini">
                                Eswatini
                              </option>
                              <option value="231" title="Ethiopia">
                                Ethiopia
                              </option>
                              <option
                                value="697"
                                title="Europe EFTA not elsewhere specified"
                              >
                                Europe EFTA not elsewhere specified
                              </option>
                              <option value="568" title="Europe Othr. Nes">
                                Europe Othr. Nes
                              </option>
                              <option value="492" title="European Union Nes">
                                European Union Nes
                              </option>
                              <option
                                value="238"
                                title="Falkland Islands (Malvinas)"
                              >
                                Falkland Islands (Malvinas)
                              </option>
                              <option value="234" title="Faroe Islands">
                                Faroe Islands
                              </option>
                              <option value="242" title="Fiji">
                                Fiji
                              </option>
                              <option value="246" title="Finland">
                                Finland
                              </option>
                              <option value="251" title="France">
                                France
                              </option>
                              <option value="838" title="Free Zones">
                                Free Zones
                              </option>
                              <option value="258" title="French Polynesia">
                                French Polynesia
                              </option>
                              <option
                                value="260"
                                title="French Southern and Antarctic Territories"
                              >
                                French Southern and Antarctic Territories
                              </option>
                              <option value="266" title="Gabon">
                                Gabon
                              </option>
                              <option value="270" title="Gambia">
                                Gambia
                              </option>
                              <option value="268" title="Georgia">
                                Georgia
                              </option>
                              <option value="276" title="Germany">
                                Germany
                              </option>
                              <option value="288" title="Ghana">
                                Ghana
                              </option>
                              <option value="292" title="Gibraltar">
                                Gibraltar
                              </option>
                              <option value="300" title="Greece">
                                Greece
                              </option>
                              <option value="304" title="Greenland">
                                Greenland
                              </option>
                              <option value="308" title="Grenada">
                                Grenada
                              </option>
                              <option value="316" title="Guam">
                                Guam
                              </option>
                              <option value="320" title="Guatemala">
                                Guatemala
                              </option>
                              <option value="324" title="Guinea">
                                Guinea
                              </option>
                              <option value="624" title="Guinea-Bissau">
                                Guinea-Bissau
                              </option>
                              <option value="328" title="Guyana">
                                Guyana
                              </option>
                              <option value="332" title="Haiti">
                                Haiti
                              </option>
                              <option value="340" title="Honduras">
                                Honduras
                              </option>
                              <option value="344" title="Hong Kong, China">
                                Hong Kong, China
                              </option>
                              <option value="348" title="Hungary">
                                Hungary
                              </option>
                              <option value="352" title="Iceland">
                                Iceland
                              </option>
                              <option value="699" title="India">
                                India
                              </option>
                              <option value="360" title="Indonesia">
                                Indonesia
                              </option>
                              <option
                                value="364"
                                title="Iran, Islamic Republic of"
                              >
                                Iran, Islamic Republic of
                              </option>
                              <option value="368" title="Iraq">
                                Iraq
                              </option>
                              <option value="372" title="Ireland">
                                Ireland
                              </option>
                              <option value="376" title="Israel">
                                Israel
                              </option>
                              <option value="381" title="Italy">
                                Italy
                              </option>
                              <option value="388" title="Jamaica">
                                Jamaica
                              </option>
                              <option value="392" title="Japan">
                                Japan
                              </option>
                              <option value="400" title="Jordan">
                                Jordan
                              </option>
                              <option value="398" title="Kazakhstan">
                                Kazakhstan
                              </option>
                              <option value="404" title="Kenya">
                                Kenya
                              </option>
                              <option value="296" title="Kiribati">
                                Kiribati
                              </option>
                              <option
                                value="408"
                                title="Korea, Democratic People's Republic of"
                              >
                                Korea, Democratic People's Republic of
                              </option>
                              <option value="410" title="Korea, Republic of">
                                Korea, Republic of
                              </option>
                              <option value="414" title="Kuwait">
                                Kuwait
                              </option>
                              <option value="417" title="Kyrgyzstan">
                                Kyrgyzstan
                              </option>
                              <option
                                value="473"
                                title="LAIA not elsewhere specified"
                              >
                                LAIA not elsewhere specified
                              </option>
                              <option
                                value="418"
                                title="Lao People's Democratic Republic"
                              >
                                Lao People's Democratic Republic
                              </option>
                              <option value="428" title="Latvia">
                                Latvia
                              </option>
                              <option value="422" title="Lebanon">
                                Lebanon
                              </option>
                              <option value="426" title="Lesotho">
                                Lesotho
                              </option>
                              <option value="430" title="Liberia">
                                Liberia
                              </option>
                              <option value="434" title="Libya, State of">
                                Libya, State of
                              </option>
                              <option value="440" title="Lithuania">
                                Lithuania
                              </option>
                              <option value="442" title="Luxembourg">
                                Luxembourg
                              </option>
                              <option value="446" title="Macao, China">
                                Macao, China
                              </option>
                              <option value="807" title="Macedonia, North">
                                Macedonia, North
                              </option>
                              <option value="450" title="Madagascar">
                                Madagascar
                              </option>
                              <option value="454" title="Malawi">
                                Malawi
                              </option>
                              <option value="458" title="Malaysia">
                                Malaysia
                              </option>
                              <option value="462" title="Maldives">
                                Maldives
                              </option>
                              <option value="466" title="Mali">
                                Mali
                              </option>
                              <option value="470" title="Malta">
                                Malta
                              </option>
                              <option value="584" title="Marshall Islands">
                                Marshall Islands
                              </option>
                              <option value="478" title="Mauritania">
                                Mauritania
                              </option>
                              <option value="480" title="Mauritius">
                                Mauritius
                              </option>
                              <option value="175" title="Mayotte">
                                Mayotte
                              </option>
                              <option value="484" title="Mexico">
                                Mexico
                              </option>
                              <option
                                value="583"
                                title="Micronesia, Federated States of"
                              >
                                Micronesia, Federated States of
                              </option>
                              <option value="498" title="Moldova, Republic of">
                                Moldova, Republic of
                              </option>
                              <option value="496" title="Mongolia">
                                Mongolia
                              </option>
                              <option value="499" title="Montenegro">
                                Montenegro
                              </option>
                              <option value="500" title="Montserrat">
                                Montserrat
                              </option>
                              <option value="504" title="Morocco">
                                Morocco
                              </option>
                              <option value="508" title="Mozambique">
                                Mozambique
                              </option>
                              <option value="104" title="Myanmar">
                                Myanmar
                              </option>
                              <option value="516" title="Namibia">
                                Namibia
                              </option>
                              <option value="520" title="Nauru">
                                Nauru
                              </option>
                              <option value="524" title="Nepal">
                                Nepal
                              </option>
                              <option value="528" title="Netherlands">
                                Netherlands
                              </option>
                              <option value="530" title="Netherlands Antilles">
                                Netherlands Antilles
                              </option>
                              <option value="536" title="Neutral Zone">
                                Neutral Zone
                              </option>
                              <option value="540" title="New Caledonia">
                                New Caledonia
                              </option>
                              <option value="554" title="New Zealand">
                                New Zealand
                              </option>
                              <option value="558" title="Nicaragua">
                                Nicaragua
                              </option>
                              <option value="562" title="Niger">
                                Niger
                              </option>
                              <option value="566" title="Nigeria">
                                Nigeria
                              </option>
                              <option value="570" title="Niue">
                                Niue
                              </option>
                              <option value="574" title="Norfolk Island">
                                Norfolk Island
                              </option>
                              <option
                                value="290"
                                title="North Africa not elsewhere specified"
                              >
                                North Africa not elsewhere specified
                              </option>
                              <option
                                value="637"
                                title="North America and Central America, nes"
                              >
                                North America and Central America, nes
                              </option>
                              <option
                                value="580"
                                title="Northern Mariana Islands"
                              >
                                Northern Mariana Islands
                              </option>
                              <option value="579" title="Norway">
                                Norway
                              </option>
                              <option value="527" title="Oceania Nes">
                                Oceania Nes
                              </option>
                              <option value="512" title="Oman">
                                Oman
                              </option>
                              <option value="586" title="Pakistan">
                                Pakistan
                              </option>
                              <option value="585" title="Palau">
                                Palau
                              </option>
                              <option value="275" title="Palestine, State of">
                                Palestine, State of
                              </option>
                              <option value="591" title="Panama">
                                Panama
                              </option>
                              <option value="598" title="Papua New Guinea">
                                Papua New Guinea
                              </option>
                              <option value="600" title="Paraguay">
                                Paraguay
                              </option>
                              <option value="604" title="Peru">
                                Peru
                              </option>
                              <option value="608" title="Philippines">
                                Philippines
                              </option>
                              <option value="612" title="Pitcairn">
                                Pitcairn
                              </option>
                              <option value="616" title="Poland">
                                Poland
                              </option>
                              <option value="620" title="Portugal">
                                Portugal
                              </option>
                              <option value="634" title="Qatar">
                                Qatar
                              </option>
                              <option value="642" title="Romania">
                                Romania
                              </option>
                              <option value="643" title="Russian Federation">
                                Russian Federation
                              </option>
                              <option value="646" title="Rwanda">
                                Rwanda
                              </option>
                              <option value="654" title="Saint Helena">
                                Saint Helena
                              </option>
                              <option value="659" title="Saint Kitts and Nevis">
                                Saint Kitts and Nevis
                              </option>
                              <option value="662" title="Saint Lucia">
                                Saint Lucia
                              </option>
                              <option
                                value="670"
                                title="Saint Vincent and the Grenadines"
                              >
                                Saint Vincent and the Grenadines
                              </option>
                              <option value="882" title="Samoa">
                                Samoa
                              </option>
                              <option value="678" title="Sao Tome and Principe">
                                Sao Tome and Principe
                              </option>
                              <option value="682" title="Saudi Arabia">
                                Saudi Arabia
                              </option>
                              <option value="686" title="Senegal">
                                Senegal
                              </option>
                              <option value="688" title="Serbia">
                                Serbia
                              </option>
                              <option value="891" title="Serbia and Montenegro">
                                Serbia and Montenegro
                              </option>
                              <option value="690" title="Seychelles">
                                Seychelles
                              </option>
                              <option
                                value="837"
                                title="Ship stores and bunkers"
                              >
                                Ship stores and bunkers
                              </option>
                              <option value="694" title="Sierra Leone">
                                Sierra Leone
                              </option>
                              <option value="702" title="Singapore">
                                Singapore
                              </option>
                              <option
                                value="534"
                                title="Sint Maarten (Dutch part)"
                              >
                                Sint Maarten (Dutch part)
                              </option>
                              <option value="703" title="Slovakia">
                                Slovakia
                              </option>
                              <option value="705" title="Slovenia">
                                Slovenia
                              </option>
                              <option value="090" title="Solomon Islands">
                                Solomon Islands
                              </option>
                              <option value="706" title="Somalia">
                                Somalia
                              </option>
                              <option value="710" title="South Africa">
                                South Africa
                              </option>
                              <option value="728" title="South Sudan">
                                South Sudan
                              </option>
                              <option value="724" title="Spain">
                                Spain
                              </option>
                              <option value="839" title="Special categories">
                                Special categories
                              </option>
                              <option value="144" title="Sri Lanka">
                                Sri Lanka
                              </option>
                              <option
                                value="666"
                                title="St. Pierre and Miquelon"
                              >
                                St. Pierre and Miquelon
                              </option>
                              <option value="729" title="Sudan">
                                Sudan
                              </option>
                              <option value="736" title="Sudan (before 2012)">
                                Sudan (before 2012)
                              </option>
                              <option value="740" title="Suriname">
                                Suriname
                              </option>
                              <option value="752" title="Sweden">
                                Sweden
                              </option>
                              <option value="757" title="Switzerland">
                                Switzerland
                              </option>
                              <option value="760" title="Syrian Arab Republic">
                                Syrian Arab Republic
                              </option>
                              <option value="490" title="Taipei, Chinese">
                                Taipei, Chinese
                              </option>
                              <option value="762" title="Tajikistan">
                                Tajikistan
                              </option>
                              <option
                                value="834"
                                title="Tanzania, United Republic of"
                              >
                                Tanzania, United Republic of
                              </option>
                              <option
                                value="999"
                                title="Territory not allocated"
                              >
                                Territory not allocated
                              </option>
                              <option value="764" title="Thailand">
                                Thailand
                              </option>
                              <option value="626" title="Timor-Leste">
                                Timor-Leste
                              </option>
                              <option value="768" title="Togo">
                                Togo
                              </option>
                              <option value="772" title="Tokelau">
                                Tokelau
                              </option>
                              <option value="776" title="Tonga">
                                Tonga
                              </option>
                              <option value="780" title="Trinidad and Tobago">
                                Trinidad and Tobago
                              </option>
                              <option value="788" title="Tunisia">
                                Tunisia
                              </option>
                              <option value="792" title="Turkey">
                                Turkey
                              </option>
                              <option value="795" title="Turkmenistan">
                                Turkmenistan
                              </option>
                              <option
                                value="796"
                                title="Turks and Caicos Islands"
                              >
                                Turks and Caicos Islands
                              </option>
                              <option value="798" title="Tuvalu">
                                Tuvalu
                              </option>
                              <option value="800" title="Uganda">
                                Uganda
                              </option>
                              <option value="804" title="Ukraine">
                                Ukraine
                              </option>
                              <option value="784" title="United Arab Emirates">
                                United Arab Emirates
                              </option>
                              <option value="826" title="United Kingdom">
                                United Kingdom
                              </option>
                              <option
                                value="849"
                                title="United States Minor Outlying Islands"
                              >
                                United States Minor Outlying Islands
                              </option>
                              <option
                                value="842"
                                title="United States of America"
                              >
                                United States of America
                              </option>
                              <option value="858" title="Uruguay">
                                Uruguay
                              </option>
                              <option value="860" title="Uzbekistan">
                                Uzbekistan
                              </option>
                              <option value="548" title="Vanuatu">
                                Vanuatu
                              </option>
                              <option
                                value="862"
                                title="Venezuela, Bolivarian Republic of"
                              >
                                Venezuela, Bolivarian Republic of
                              </option>
                              <option value="704" title="Viet Nam">
                                Viet Nam
                              </option>
                              <option
                                value="876"
                                title="Wallis and Futuna Islands"
                              >
                                Wallis and Futuna Islands
                              </option>
                              <option
                                value="879"
                                title="West Asia not elsewhere specified"
                              >
                                West Asia not elsewhere specified
                              </option>
                              <option value="732" title="Western Sahara">
                                Western Sahara
                              </option>
                              <option value="887" title="Yemen">
                                Yemen
                              </option>
                              <option value="894" title="Zambia">
                                Zambia
                              </option>
                              <option value="716" title="Zimbabwe">
                                Zimbabwe
                              </option>
                            </select>
                          </div>
                          <div className="form-group col-md-3">
                            <select
                              className="form-control"
                              name="to_country_code"
                              id="tocountry"
                            >
                              <option value="">Select To Country</option>
                              <option value="004" title="Afghanistan">
                                Afghanistan
                              </option>
                              {/* <!-- <option value="-2">All</option><option value="577" title="Africa not elsewhere specified">Africa not elsewhere specified</option> --> */}
                              <option value="008" title="Albania">
                                Albania
                              </option>
                              <option value="012" title="Algeria">
                                Algeria
                              </option>
                              <option
                                value="636"
                                title="America not elsewhere specified"
                              >
                                America not elsewhere specified
                              </option>
                              <option value="016" title="American Samoa">
                                American Samoa
                              </option>
                              <option value="020" title="Andorra">
                                Andorra
                              </option>
                              <option value="024" title="Angola">
                                Angola
                              </option>
                              <option value="660" title="Anguilla">
                                Anguilla
                              </option>
                              <option value="028" title="Antigua and Barbuda">
                                Antigua and Barbuda
                              </option>
                              <option value="899" title="Area Nes">
                                Area Nes
                              </option>
                              <option value="032" title="Argentina">
                                Argentina
                              </option>
                              <option value="051" title="Armenia">
                                Armenia
                              </option>
                              <option value="533" title="Aruba">
                                Aruba
                              </option>
                              <option
                                value="946"
                                title="Asia not elsewhere specified"
                              >
                                Asia not elsewhere specified
                              </option>
                              <option value="036" title="Australia">
                                Australia
                              </option>
                              <option value="040" title="Austria">
                                Austria
                              </option>
                              <option value="031" title="Azerbaijan">
                                Azerbaijan
                              </option>
                              <option value="044" title="Bahamas">
                                Bahamas
                              </option>
                              <option value="048" title="Bahrain">
                                Bahrain
                              </option>
                              <option value="050" title="Bangladesh">
                                Bangladesh
                              </option>
                              <option value="052" title="Barbados">
                                Barbados
                              </option>
                              <option value="112" title="Belarus">
                                Belarus
                              </option>
                              <option value="056" title="Belgium">
                                Belgium
                              </option>
                              <option value="084" title="Belize">
                                Belize
                              </option>
                              <option value="204" title="Benin">
                                Benin
                              </option>
                              <option value="060" title="Bermuda">
                                Bermuda
                              </option>
                              <option value="064" title="Bhutan">
                                Bhutan
                              </option>
                              <option
                                value="068"
                                title="Bolivia, Plurinational State of"
                              >
                                Bolivia, Plurinational State of
                              </option>
                              <option
                                value="535"
                                title="Bonaire, Sint Eustatius and Saba"
                              >
                                Bonaire, Sint Eustatius and Saba
                              </option>
                              <option
                                value="070"
                                title="Bosnia and Herzegovina"
                              >
                                Bosnia and Herzegovina
                              </option>
                              <option value="072" title="Botswana">
                                Botswana
                              </option>
                              <option value="074" title="Bouvet Island">
                                Bouvet Island
                              </option>
                              <option value="076" title="Brazil">
                                Brazil
                              </option>
                              <option
                                value="080"
                                title="British Antarctic Territory"
                              >
                                British Antarctic Territory
                              </option>
                              <option
                                value="086"
                                title="British Indian Ocean Territory"
                              >
                                British Indian Ocean Territory
                              </option>
                              <option
                                value="092"
                                title="British Virgin Islands"
                              >
                                British Virgin Islands
                              </option>
                              <option value="096" title="Brunei Darussalam">
                                Brunei Darussalam
                              </option>
                              <option value="100" title="Bulgaria">
                                Bulgaria
                              </option>
                              <option value="854" title="Burkina Faso">
                                Burkina Faso
                              </option>
                              <option value="108" title="Burundi">
                                Burundi
                              </option>
                              <option value="132" title="Cabo Verde">
                                Cabo Verde
                              </option>
                              <option value="116" title="Cambodia">
                                Cambodia
                              </option>
                              <option value="120" title="Cameroon">
                                Cameroon
                              </option>
                              <option value="124" title="Canada">
                                Canada
                              </option>
                              <option value="129" title="Caribbean Nes">
                                Caribbean Nes
                              </option>
                              <option value="136" title="Cayman Islands">
                                Cayman Islands
                              </option>
                              <option
                                value="471"
                                title="Centr.Amer.Com.Market (CACM) Nes"
                              >
                                Centr.Amer.Com.Market (CACM) Nes
                              </option>
                              <option
                                value="140"
                                title="Central African Republic"
                              >
                                Central African Republic
                              </option>
                              <option value="148" title="Chad">
                                Chad
                              </option>
                              <option value="152" title="Chile">
                                Chile
                              </option>
                              <option value="156" title="China">
                                China
                              </option>
                              <option value="162" title="Christmas Island">
                                Christmas Island
                              </option>
                              <option
                                value="166"
                                title="Cocos (Keeling) Islands"
                              >
                                Cocos (Keeling) Islands
                              </option>
                              <option value="170" title="Colombia">
                                Colombia
                              </option>
                              <option value="174" title="Comoros">
                                Comoros
                              </option>
                              <option value="178" title="Congo">
                                Congo
                              </option>
                              <option
                                value="180"
                                title="Congo, Democratic Republic of the"
                              >
                                Congo, Democratic Republic of the
                              </option>
                              <option value="184" title="Cook Islands">
                                Cook Islands
                              </option>
                              <option value="188" title="Costa Rica">
                                Costa Rica
                              </option>
                              <option value="384" title="Côte d'Ivoire">
                                Côte d'Ivoire
                              </option>
                              <option value="191" title="Croatia">
                                Croatia
                              </option>
                              <option value="192" title="Cuba">
                                Cuba
                              </option>
                              <option value="531" title="Curaçao">
                                Curaçao
                              </option>
                              <option value="196" title="Cyprus">
                                Cyprus
                              </option>
                              <option value="203" title="Czech Republic">
                                Czech Republic
                              </option>
                              <option value="208" title="Denmark">
                                Denmark
                              </option>
                              <option value="262" title="Djibouti">
                                Djibouti
                              </option>
                              <option value="212" title="Dominica">
                                Dominica
                              </option>
                              <option value="214" title="Dominican Republic">
                                Dominican Republic
                              </option>
                              <option
                                value="221"
                                title="East Europe not elsewhere specified"
                              >
                                East Europe not elsewhere specified
                              </option>
                              <option value="218" title="Ecuador">
                                Ecuador
                              </option>
                              <option value="818" title="Egypt">
                                Egypt
                              </option>
                              <option value="222" title="El Salvador">
                                El Salvador
                              </option>
                              <option value="226" title="Equatorial Guinea">
                                Equatorial Guinea
                              </option>
                              <option value="232" title="Eritrea">
                                Eritrea
                              </option>
                              <option value="233" title="Estonia">
                                Estonia
                              </option>
                              <option value="748" title="Eswatini">
                                Eswatini
                              </option>
                              <option value="231" title="Ethiopia">
                                Ethiopia
                              </option>
                              <option
                                value="697"
                                title="Europe EFTA not elsewhere specified"
                              >
                                Europe EFTA not elsewhere specified
                              </option>
                              <option value="568" title="Europe Othr. Nes">
                                Europe Othr. Nes
                              </option>
                              <option value="492" title="European Union Nes">
                                European Union Nes
                              </option>
                              <option
                                value="238"
                                title="Falkland Islands (Malvinas)"
                              >
                                Falkland Islands (Malvinas)
                              </option>
                              <option value="234" title="Faroe Islands">
                                Faroe Islands
                              </option>
                              <option value="242" title="Fiji">
                                Fiji
                              </option>
                              <option value="246" title="Finland">
                                Finland
                              </option>
                              <option value="251" title="France">
                                France
                              </option>
                              <option value="838" title="Free Zones">
                                Free Zones
                              </option>
                              <option value="258" title="French Polynesia">
                                French Polynesia
                              </option>
                              <option
                                value="260"
                                title="French Southern and Antarctic Territories"
                              >
                                French Southern and Antarctic Territories
                              </option>
                              <option value="266" title="Gabon">
                                Gabon
                              </option>
                              <option value="270" title="Gambia">
                                Gambia
                              </option>
                              <option value="268" title="Georgia">
                                Georgia
                              </option>
                              <option value="276" title="Germany">
                                Germany
                              </option>
                              <option value="288" title="Ghana">
                                Ghana
                              </option>
                              <option value="292" title="Gibraltar">
                                Gibraltar
                              </option>
                              <option value="300" title="Greece">
                                Greece
                              </option>
                              <option value="304" title="Greenland">
                                Greenland
                              </option>
                              <option value="308" title="Grenada">
                                Grenada
                              </option>
                              <option value="316" title="Guam">
                                Guam
                              </option>
                              <option value="320" title="Guatemala">
                                Guatemala
                              </option>
                              <option value="324" title="Guinea">
                                Guinea
                              </option>
                              <option value="624" title="Guinea-Bissau">
                                Guinea-Bissau
                              </option>
                              <option value="328" title="Guyana">
                                Guyana
                              </option>
                              <option value="332" title="Haiti">
                                Haiti
                              </option>
                              <option value="340" title="Honduras">
                                Honduras
                              </option>
                              <option value="344" title="Hong Kong, China">
                                Hong Kong, China
                              </option>
                              <option value="348" title="Hungary">
                                Hungary
                              </option>
                              <option value="352" title="Iceland">
                                Iceland
                              </option>
                              <option value="699" title="India">
                                India
                              </option>
                              <option value="360" title="Indonesia">
                                Indonesia
                              </option>
                              <option
                                value="364"
                                title="Iran, Islamic Republic of"
                              >
                                Iran, Islamic Republic of
                              </option>
                              <option value="368" title="Iraq">
                                Iraq
                              </option>
                              <option value="372" title="Ireland">
                                Ireland
                              </option>
                              <option value="376" title="Israel">
                                Israel
                              </option>
                              <option value="381" title="Italy">
                                Italy
                              </option>
                              <option value="388" title="Jamaica">
                                Jamaica
                              </option>
                              <option value="392" title="Japan">
                                Japan
                              </option>
                              <option value="400" title="Jordan">
                                Jordan
                              </option>
                              <option value="398" title="Kazakhstan">
                                Kazakhstan
                              </option>
                              <option value="404" title="Kenya">
                                Kenya
                              </option>
                              <option value="296" title="Kiribati">
                                Kiribati
                              </option>
                              <option
                                value="408"
                                title="Korea, Democratic People's Republic of"
                              >
                                Korea, Democratic People's Republic of
                              </option>
                              <option value="410" title="Korea, Republic of">
                                Korea, Republic of
                              </option>
                              <option value="414" title="Kuwait">
                                Kuwait
                              </option>
                              <option value="417" title="Kyrgyzstan">
                                Kyrgyzstan
                              </option>
                              <option
                                value="473"
                                title="LAIA not elsewhere specified"
                              >
                                LAIA not elsewhere specified
                              </option>
                              <option
                                value="418"
                                title="Lao People's Democratic Republic"
                              >
                                Lao People's Democratic Republic
                              </option>
                              <option value="428" title="Latvia">
                                Latvia
                              </option>
                              <option value="422" title="Lebanon">
                                Lebanon
                              </option>
                              <option value="426" title="Lesotho">
                                Lesotho
                              </option>
                              <option value="430" title="Liberia">
                                Liberia
                              </option>
                              <option value="434" title="Libya, State of">
                                Libya, State of
                              </option>
                              <option value="440" title="Lithuania">
                                Lithuania
                              </option>
                              <option value="442" title="Luxembourg">
                                Luxembourg
                              </option>
                              <option value="446" title="Macao, China">
                                Macao, China
                              </option>
                              <option value="807" title="Macedonia, North">
                                Macedonia, North
                              </option>
                              <option value="450" title="Madagascar">
                                Madagascar
                              </option>
                              <option value="454" title="Malawi">
                                Malawi
                              </option>
                              <option value="458" title="Malaysia">
                                Malaysia
                              </option>
                              <option value="462" title="Maldives">
                                Maldives
                              </option>
                              <option value="466" title="Mali">
                                Mali
                              </option>
                              <option value="470" title="Malta">
                                Malta
                              </option>
                              <option value="584" title="Marshall Islands">
                                Marshall Islands
                              </option>
                              <option value="478" title="Mauritania">
                                Mauritania
                              </option>
                              <option value="480" title="Mauritius">
                                Mauritius
                              </option>
                              <option value="175" title="Mayotte">
                                Mayotte
                              </option>
                              <option value="484" title="Mexico">
                                Mexico
                              </option>
                              <option
                                value="583"
                                title="Micronesia, Federated States of"
                              >
                                Micronesia, Federated States of
                              </option>
                              <option value="498" title="Moldova, Republic of">
                                Moldova, Republic of
                              </option>
                              <option value="496" title="Mongolia">
                                Mongolia
                              </option>
                              <option value="499" title="Montenegro">
                                Montenegro
                              </option>
                              <option value="500" title="Montserrat">
                                Montserrat
                              </option>
                              <option value="504" title="Morocco">
                                Morocco
                              </option>
                              <option value="508" title="Mozambique">
                                Mozambique
                              </option>
                              <option value="104" title="Myanmar">
                                Myanmar
                              </option>
                              <option value="516" title="Namibia">
                                Namibia
                              </option>
                              <option value="520" title="Nauru">
                                Nauru
                              </option>
                              <option value="524" title="Nepal">
                                Nepal
                              </option>
                              <option value="528" title="Netherlands">
                                Netherlands
                              </option>
                              <option value="530" title="Netherlands Antilles">
                                Netherlands Antilles
                              </option>
                              <option value="536" title="Neutral Zone">
                                Neutral Zone
                              </option>
                              <option value="540" title="New Caledonia">
                                New Caledonia
                              </option>
                              <option value="554" title="New Zealand">
                                New Zealand
                              </option>
                              <option value="558" title="Nicaragua">
                                Nicaragua
                              </option>
                              <option value="562" title="Niger">
                                Niger
                              </option>
                              <option value="566" title="Nigeria">
                                Nigeria
                              </option>
                              <option value="570" title="Niue">
                                Niue
                              </option>
                              <option value="574" title="Norfolk Island">
                                Norfolk Island
                              </option>
                              <option
                                value="290"
                                title="North Africa not elsewhere specified"
                              >
                                North Africa not elsewhere specified
                              </option>
                              <option
                                value="637"
                                title="North America and Central America, nes"
                              >
                                North America and Central America, nes
                              </option>
                              <option
                                value="580"
                                title="Northern Mariana Islands"
                              >
                                Northern Mariana Islands
                              </option>
                              <option value="579" title="Norway">
                                Norway
                              </option>
                              <option value="527" title="Oceania Nes">
                                Oceania Nes
                              </option>
                              <option value="512" title="Oman">
                                Oman
                              </option>
                              <option value="586" title="Pakistan">
                                Pakistan
                              </option>
                              <option value="585" title="Palau">
                                Palau
                              </option>
                              <option value="275" title="Palestine, State of">
                                Palestine, State of
                              </option>
                              <option value="591" title="Panama">
                                Panama
                              </option>
                              <option value="598" title="Papua New Guinea">
                                Papua New Guinea
                              </option>
                              <option value="600" title="Paraguay">
                                Paraguay
                              </option>
                              <option value="604" title="Peru">
                                Peru
                              </option>
                              <option value="608" title="Philippines">
                                Philippines
                              </option>
                              <option value="612" title="Pitcairn">
                                Pitcairn
                              </option>
                              <option value="616" title="Poland">
                                Poland
                              </option>
                              <option value="620" title="Portugal">
                                Portugal
                              </option>
                              <option value="634" title="Qatar">
                                Qatar
                              </option>
                              <option value="642" title="Romania">
                                Romania
                              </option>
                              <option value="643" title="Russian Federation">
                                Russian Federation
                              </option>
                              <option value="646" title="Rwanda">
                                Rwanda
                              </option>
                              <option value="654" title="Saint Helena">
                                Saint Helena
                              </option>
                              <option value="659" title="Saint Kitts and Nevis">
                                Saint Kitts and Nevis
                              </option>
                              <option value="662" title="Saint Lucia">
                                Saint Lucia
                              </option>
                              <option
                                value="670"
                                title="Saint Vincent and the Grenadines"
                              >
                                Saint Vincent and the Grenadines
                              </option>
                              <option value="882" title="Samoa">
                                Samoa
                              </option>
                              <option value="678" title="Sao Tome and Principe">
                                Sao Tome and Principe
                              </option>
                              <option value="682" title="Saudi Arabia">
                                Saudi Arabia
                              </option>
                              <option value="686" title="Senegal">
                                Senegal
                              </option>
                              <option value="688" title="Serbia">
                                Serbia
                              </option>
                              <option value="891" title="Serbia and Montenegro">
                                Serbia and Montenegro
                              </option>
                              <option value="690" title="Seychelles">
                                Seychelles
                              </option>
                              <option
                                value="837"
                                title="Ship stores and bunkers"
                              >
                                Ship stores and bunkers
                              </option>
                              <option value="694" title="Sierra Leone">
                                Sierra Leone
                              </option>
                              <option value="702" title="Singapore">
                                Singapore
                              </option>
                              <option
                                value="534"
                                title="Sint Maarten (Dutch part)"
                              >
                                Sint Maarten (Dutch part)
                              </option>
                              <option value="703" title="Slovakia">
                                Slovakia
                              </option>
                              <option value="705" title="Slovenia">
                                Slovenia
                              </option>
                              <option value="090" title="Solomon Islands">
                                Solomon Islands
                              </option>
                              <option value="706" title="Somalia">
                                Somalia
                              </option>
                              <option value="710" title="South Africa">
                                South Africa
                              </option>
                              <option value="728" title="South Sudan">
                                South Sudan
                              </option>
                              <option value="724" title="Spain">
                                Spain
                              </option>
                              <option value="839" title="Special categories">
                                Special categories
                              </option>
                              <option value="144" title="Sri Lanka">
                                Sri Lanka
                              </option>
                              <option
                                value="666"
                                title="St. Pierre and Miquelon"
                              >
                                St. Pierre and Miquelon
                              </option>
                              <option value="729" title="Sudan">
                                Sudan
                              </option>
                              <option value="736" title="Sudan (before 2012)">
                                Sudan (before 2012)
                              </option>
                              <option value="740" title="Suriname">
                                Suriname
                              </option>
                              <option value="752" title="Sweden">
                                Sweden
                              </option>
                              <option value="757" title="Switzerland">
                                Switzerland
                              </option>
                              <option value="760" title="Syrian Arab Republic">
                                Syrian Arab Republic
                              </option>
                              <option value="490" title="Taipei, Chinese">
                                Taipei, Chinese
                              </option>
                              <option value="762" title="Tajikistan">
                                Tajikistan
                              </option>
                              <option
                                value="834"
                                title="Tanzania, United Republic of"
                              >
                                Tanzania, United Republic of
                              </option>
                              <option
                                value="999"
                                title="Territory not allocated"
                              >
                                Territory not allocated
                              </option>
                              <option value="764" title="Thailand">
                                Thailand
                              </option>
                              <option value="626" title="Timor-Leste">
                                Timor-Leste
                              </option>
                              <option value="768" title="Togo">
                                Togo
                              </option>
                              <option value="772" title="Tokelau">
                                Tokelau
                              </option>
                              <option value="776" title="Tonga">
                                Tonga
                              </option>
                              <option value="780" title="Trinidad and Tobago">
                                Trinidad and Tobago
                              </option>
                              <option value="788" title="Tunisia">
                                Tunisia
                              </option>
                              <option value="792" title="Turkey">
                                Turkey
                              </option>
                              <option value="795" title="Turkmenistan">
                                Turkmenistan
                              </option>
                              <option
                                value="796"
                                title="Turks and Caicos Islands"
                              >
                                Turks and Caicos Islands
                              </option>
                              <option value="798" title="Tuvalu">
                                Tuvalu
                              </option>
                              <option value="800" title="Uganda">
                                Uganda
                              </option>
                              <option value="804" title="Ukraine">
                                Ukraine
                              </option>
                              <option value="784" title="United Arab Emirates">
                                United Arab Emirates
                              </option>
                              <option value="826" title="United Kingdom">
                                United Kingdom
                              </option>
                              <option
                                value="849"
                                title="United States Minor Outlying Islands"
                              >
                                United States Minor Outlying Islands
                              </option>
                              <option
                                value="842"
                                title="United States of America"
                              >
                                United States of America
                              </option>
                              <option value="858" title="Uruguay">
                                Uruguay
                              </option>
                              <option value="860" title="Uzbekistan">
                                Uzbekistan
                              </option>
                              <option value="548" title="Vanuatu">
                                Vanuatu
                              </option>
                              <option
                                value="862"
                                title="Venezuela, Bolivarian Republic of"
                              >
                                Venezuela, Bolivarian Republic of
                              </option>
                              <option value="704" title="Viet Nam">
                                Viet Nam
                              </option>
                              <option
                                value="876"
                                title="Wallis and Futuna Islands"
                              >
                                Wallis and Futuna Islands
                              </option>
                              <option
                                value="879"
                                title="West Asia not elsewhere specified"
                              >
                                West Asia not elsewhere specified
                              </option>
                              <option value="732" title="Western Sahara">
                                Western Sahara
                              </option>
                              <option value="887" title="Yemen">
                                Yemen
                              </option>
                              <option value="894" title="Zambia">
                                Zambia
                              </option>
                              <option value="716" title="Zimbabwe">
                                Zimbabwe
                              </option>
                            </select>
                          </div>
                          <div className="form-group col-md-2">
                            <input
                              type="submit"
                              className="btn btn-info"
                              value="Search"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <table className="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th>HS Code - Name</th>
                            <th>Trade Year</th>
                            <th>Exports (in $)</th>
                            <th>Total Imports (in $)</th>
                            <th>Total World Exports (in $)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((item, index) => (
                            <tr key={index}>
                              <td>
                                {item.hs_code}-{item.name}
                              </td>
                              <td>
                                <b style={{ color: "lightgrey" }}>2018</b>
                                <br />
                                <b style={{ color: "lightgrey" }}>2019</b>
                                <br />
                                <b style={{ color: "lightgrey" }}>2020</b>
                              </td>
                              <td>
                                {item.single_exports?.["2018"]
                                  ? `${item.single_exports["2018"]},000`
                                  : ""}
                                <br />
                                {item.single_exports?.["2019"]
                                  ? `${item.single_exports["2019"]},000`
                                  : ""}
                                <br />
                                {item.single_exports?.["2020"]
                                  ? `${item.single_exports["2020"]},000`
                                  : ""}
                              </td>
                              <td>
                                {item.imports && (
                                  <>
                                    {item.imports?.["2018"]
                                      ? `${item.imports["2018"]},000`
                                      : ""}
                                    <br />
                                    {item.imports?.["2019"]
                                      ? `${item.imports["2019"]},000`
                                      : ""}
                                    <br />
                                    {item.imports?.["2020"]
                                      ? `${item.imports["2020"]},000`
                                      : ""}
                                  </>
                                )}
                              </td>
                              <td>
                                {item.world_exports?.["2018"]
                                  ? `${item.world_exports["2018"]},000`
                                  : ""}
                                <br />
                                {item.world_exports?.["2019"]
                                  ? `${item.world_exports["2019"]},000`
                                  : ""}
                                <br />
                                {item.world_exports?.["2020"]
                                  ? `${item.world_exports["2020"]},000`
                                  : ""}
                              </td>
                            </tr>
                          ))}
                          {error && (
                            <tr>
                              <td colSpan="5" className="text-center">
                                {error}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportExportFlows;
