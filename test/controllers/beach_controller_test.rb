require 'test_helper'

class BeachControllerTest < ActionDispatch::IntegrationTest
  test "should get api::beach" do
    get beach_api::beach_url
    assert_response :success
  end

end
