package cn.edu.dlnu.model;

//ʡ����Model
public class Xeon_location_province {
	private String location_provinceid;		//ʡ��2λ
	private String location_province;		//ʡ��

	public String getLocation_provinceid() {
		return location_provinceid;
	}

	public void setLocation_provinceid(String location_provinceid) {
		this.location_provinceid = location_provinceid;
	}

	public String getLocation_province() {
		return location_province;
	}

	public void setLocation_province(String location_province) {
		this.location_province = location_province;
	}

	public Xeon_location_province(String location_provinceid,
			String location_provin) {
		this.location_provinceid = location_provinceid;
		this.location_province = location_provin;
	}
}
