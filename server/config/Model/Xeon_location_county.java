package cn.edu.dlnu.model;

//�ر���Model
public class Xeon_location_county {
	private String location_countyid;		//�غ�6λ
	private String location_county;			//����		
	private String location_cityid;			//�к�4λ

	public String getLocation_countyid() {
		return location_countyid;
	}

	public void setLocation_countyid(String location_countyid) {
		this.location_countyid = location_countyid;
	}

	public String getLocation_county() {
		return location_county;
	}

	public void setLocation_county(String location_county) {
		this.location_county = location_county;
	}

	public String getLocation_cityid() {
		return location_cityid;
	}

	public void setLocation_cityid(String location_cityid) {
		this.location_cityid = location_cityid;
	}

	public Xeon_location_county(String location_countyid,
			String location_county, String location_cityi) {
		this.location_countyid = location_countyid;
		this.location_county = location_county;
		this.location_cityid = location_cityi;
	}
}
