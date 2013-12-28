package cn.edu.dlnu.model;

//市表类Model
public class Xeon_location_city {
	private String location_cityid;			//市号4位
	private String location_city;			//市名
	private String location_provinceid;		//省号2位

	public String getLocation_cityid() {
		return location_cityid;
	}

	public void setLocation_cityid(String location_cityid) {
		this.location_cityid = location_cityid;
	}

	public String getLocation_city() {
		return location_city;
	}

	public void setLocation_city(String location_city) {
		this.location_city = location_city;
	}

	public String getLocation_provinceid() {
		return location_provinceid;
	}

	public void setLocation_provinceid(String location_provinceid) {
		this.location_provinceid = location_provinceid;
	}

	public Xeon_location_city(String location_cityid, String location_city,
			String location_provinceid) {
		this.location_cityid = location_cityid;
		this.location_city = location_city;
		this.location_provinceid = location_provinceid;
	}
}
