import styled from "styled-components";

function Picked() {
  return (
    <Layout>
      <Pickedtitle>내가 찜한 콘텐츠</Pickedtitle>
      <Contentcontainer>
        <Picktitle src="https://occ-0-4342-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY-tmvm_pCKu_A831rePo_9J03LkqNXLOw_ZhyuKYFigsLJcqnsc845W41NFX0ingHFutrJ9TYZJLnZ0txmgprpey_9jUoH1Tc4.webp?r=17a" />
        <Picktitle src="https://occ-0-4342-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZtjldWF-GgRs80HS1hgUhYgq2cSjVnGYW8ZnfpnabsQ718WpANy8e6TyLHbjSx-_tK_VO8DRcpZcLBcHfEN_zMe9rIF3jdqqw4V1BRb6jXIc9cBaItcx4zzCNnpeSp2Q5EX9KXq9gOhsAgxLngFoytwlwcyCtj8t3qQFSS636Rm7fuUKLIycxKnkKVnbHufQ9kJ7QLee3fkQ67lPBZovjsQzE0JKH8EGOJNXuzYCM5g3YfeTS8uq6Wp78oQtjO3wtNrrBHmXb-7AkSRerJXPpybXc21fvdn7h8XlW8udh8FVRun1c5lcaOs6XS7rX6mOqMvS9lnc5BlicMO9ro2P8_vO7kYbK128G9II2M7IclGdoazZhN-LR4-4Jx6ogp_KHmkCjR_ymkWFzqGcUQs14o2COLVHvPNX0RWalavh2HRudo3uZShTSrlDjAEr7iABrbJveLH.webp?r=af5" />
        <Picktitle src="https://occ-0-4342-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTCt_kFpJf8skwg3JQ48C8lHGIP5TpkOBWatIUpkIhWwTRy0i0X6aIAfJveom-79_-bqLLRtDe-gBZvdPYoYWK_H2Ufc80w3fSqX9yIlQ8a51kskLSv_haVcfuEr_XYEPCcD.jpg?r=8f7" />
        <Picktitle src="https://occ-0-4342-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfIj1E4_PwnEieBcuWvMxe-MNxWLYtD2pkpz_DzkP3mJWzEw5MCwLOlzG1V--fJLO-4Vc43eNJMiqy8KvD8W_6oQKlIta3dKY0IDZ81vFIwrr2Iz2hEnE8nyisqx2Uyt7YbS.jpg?r=580" />
        <Picktitle src="https://occ-0-4342-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSuMchQ7TmxmL0JdMPYPvxTFhg6qyHSl5zLOqlTNxBMDoCIH6HS75kL97gC9Fd3IdAzwAUiBjMkJlLS7D5fUK_iPbM9STy25dIs.webp?r=a6c" />
        <Picktitle src="https://occ-0-4342-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZtzgTWbpDq38NbQHN_e65eAYUjmQSGVGR9SlAOcNQgI-4Cpfz1HlxZpU56iqgrMhLdnjV-YfI8eTndJMY6pouqZ-BaiWTCAyIZiiKP7ubgpPExSfY5roYW2WADtjnUaN6_o3ozLcMCFjpfhqdjGxwKk49ZQOWVWLDewmMaV4B9BjOXEcj_369c2PGK2aqKUG-eqWylMbPA2iE-RZuHrzqXe94ixYusc1iDoW8P0ZGsxEBfFW5h34KnBgNecor_0ii4vhijP3oNlH2v3H8FEp_VCfVPmxHLIxYRK8FJGOUPEQoQraDBcSGCv-xORUCNCIwZsLqLGXQmn2FV_5wZDjUKevGmcFQk_wdEo7Cvlo1cm6-4oCH3GdqmC_m3T8HSMa3vmon2N5q8UNjSHPgkOwknRntEP6LOGg7CPLpSEdHsZoUPZr02eIhRoSSc_TAJeFwY1-N-A.webp?r=5bd" />
        <Picktitle src="https://occ-0-4342-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaXfhtqgWbbHeyNmqtJT-jMnmXrhzcHXzxOelsFTrARxMOgKXKpn51fDUoju9aOa5KmT2iMrycOCuH26YevH7FzAeIFzaY6N3L4.webp?r=f17" />
      </Contentcontainer>
    </Layout>
  );
}

const Layout = styled.div`
  background-color: #141414;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: -1;
  min-height: 100%;
  min-width: 80%;
  font-weight: bolder;
`;

const Pickedtitle = styled.div`
  color: white;
  margin: auto;
  font-size: 2.5rem;
  padding: 20px 20px 20px 55px;
  font-weight: 300;
  width: 100%;
  display: block;
`;

const Contentcontainer = styled.div`
  margin-left: 60px;
  margin-right: 60px;
  height: auto;
  display: inline-block;
  flex-wrap: wrap;
`;

const Picktitle = styled.img`
  width: 285px;
  margin-left: 8px;
  margin-top: 70px;
  border-radius: 5px;
  cursor: pointer;
`;

export default Picked;
