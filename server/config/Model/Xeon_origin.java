package cn.edu.dlnu.model;

//生源地表类Model
public class Xeon_origin {
	private String originid;	//生源地号10位	
	private String origin;		//生源地名
	public String getOriginid() {
		return originid;
	}
	public void setOriginid(String originid) {
		this.originid = originid;
	}
	public String getOrigin() {
		return origin;
	}
	public void setOrigin(String origin) {
		this.origin = origin;
	}
	public Xeon_origin(String originid, String origin){
		this.originid = originid;
		this.origin = origin;
	}
}
